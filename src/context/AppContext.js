import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { developers, hotels, studentHostels } from '../data/properties';

// Initial state
const initialState = {
  // Data
  developers,
  hotels,
  studentHostels,
  
  // UI State
  currentSection: 'home',
  darkMode: false,
  
  // Search & Filter
  searchTerm: '',
  typeFilter: 'all',
  priceFilter: 'all',
  locationFilter: 'all',
  filteredData: [],
  
  // Authentication
  isUserLoggedIn: false,
  currentUser: null,
  pendingAction: null,
  
  // Modals
  modals: {
    developer: { isOpen: false, data: null },
    flat: { isOpen: false, data: null },
    hotel: { isOpen: false, data: null },
    hostel: { isOpen: false, data: null },
    auth: { isOpen: false },
    schedule: { isOpen: false, data: null }
  }
};

// Action types
const actionTypes = {
  SET_CURRENT_SECTION: 'SET_CURRENT_SECTION',
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  SET_TYPE_FILTER: 'SET_TYPE_FILTER',
  SET_PRICE_FILTER: 'SET_PRICE_FILTER',
  SET_LOCATION_FILTER: 'SET_LOCATION_FILTER',
  SET_FILTERED_DATA: 'SET_FILTERED_DATA',
  SET_USER_LOGIN: 'SET_USER_LOGIN',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_PENDING_ACTION: 'SET_PENDING_ACTION',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  LOGOUT_USER: 'LOGOUT_USER'
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_SECTION:
      return { ...state, currentSection: action.payload };
    
    case actionTypes.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    
    case actionTypes.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    
    case actionTypes.SET_TYPE_FILTER:
      return { ...state, typeFilter: action.payload };
    
    case actionTypes.SET_PRICE_FILTER:
      return { ...state, priceFilter: action.payload };
    
    case actionTypes.SET_LOCATION_FILTER:
      return { ...state, locationFilter: action.payload };
    
    case actionTypes.SET_FILTERED_DATA:
      return { ...state, filteredData: action.payload };
    
    case actionTypes.SET_USER_LOGIN:
      return { ...state, isUserLoggedIn: action.payload };
    
    case actionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    
    case actionTypes.SET_PENDING_ACTION:
      return { ...state, pendingAction: action.payload };
    
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload.modalType]: {
            isOpen: true,
            data: action.payload.data || null
          }
        }
      };
    
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload]: {
            isOpen: false,
            data: null
          }
        }
      };
    
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        isUserLoggedIn: false,
        currentUser: null,
        pendingAction: null
      };
    
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Context provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      dispatch({ type: actionTypes.TOGGLE_DARK_MODE });
    }
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
  }, [state.darkMode]);

  // Initialize filtered data
  useEffect(() => {
    const allProperties = getAllProperties();
    dispatch({ type: actionTypes.SET_FILTERED_DATA, payload: allProperties });
  }, []);

  // Apply filters when search/filter values change
  useEffect(() => {
    applyFilters();
  }, [state.searchTerm, state.typeFilter, state.priceFilter, state.locationFilter]);

  // Helper functions
  const getAllProperties = () => {
    const allFlats = state.developers.flatMap(dev => 
      dev.flats.map(flat => ({...flat, developerName: dev.name, category: 'real-estate'}))
    );
    const allHotels = state.hotels.map(hotel => ({...hotel, category: 'hotel'}));
    const allHostels = state.studentHostels.map(hostel => ({...hostel, category: 'hostel'}));
    return [...allFlats, ...allHotels, ...allHostels];
  };

  const applyFilters = () => {
    let filtered = getAllProperties();

    // Search filter
    if (state.searchTerm) {
      filtered = filtered.filter(item => 
        item.name?.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        item.location?.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        item.developerName?.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }

    // Type filter
    if (state.typeFilter !== 'all') {
      if (state.typeFilter === 'hotel') {
        filtered = filtered.filter(item => item.category === 'hotel');
      } else if (state.typeFilter === 'hostel') {
        filtered = filtered.filter(item => item.category === 'hostel');
      } else {
        filtered = filtered.filter(item => item.type === state.typeFilter);
      }
    }

    // Price filter
    if (state.priceFilter !== 'all') {
      const [min, max] = state.priceFilter.includes('+') 
        ? [parseInt(state.priceFilter.replace('+', '')), Infinity]
        : state.priceFilter.split('-').map(p => parseInt(p));
      
      filtered = filtered.filter(item => {
        const price = item.price || 0;
        return price >= min && (max === Infinity || price <= max);
      });
    }

    // Location filter
    if (state.locationFilter !== 'all') {
      filtered = filtered.filter(item => 
        item.location?.toLowerCase().includes(state.locationFilter.toLowerCase())
      );
    }

    dispatch({ type: actionTypes.SET_FILTERED_DATA, payload: filtered });
  };

  // Action creators
  const actions = {
    setCurrentSection: (section) => dispatch({ type: actionTypes.SET_CURRENT_SECTION, payload: section }),
    toggleDarkMode: () => dispatch({ type: actionTypes.TOGGLE_DARK_MODE }),
    setSearchTerm: (term) => dispatch({ type: actionTypes.SET_SEARCH_TERM, payload: term }),
    setTypeFilter: (type) => dispatch({ type: actionTypes.SET_TYPE_FILTER, payload: type }),
    setPriceFilter: (price) => dispatch({ type: actionTypes.SET_PRICE_FILTER, payload: price }),
    setLocationFilter: (location) => dispatch({ type: actionTypes.SET_LOCATION_FILTER, payload: location }),
    setUserLogin: (status) => dispatch({ type: actionTypes.SET_USER_LOGIN, payload: status }),
    setCurrentUser: (user) => dispatch({ type: actionTypes.SET_CURRENT_USER, payload: user }),
    setPendingAction: (action) => dispatch({ type: actionTypes.SET_PENDING_ACTION, payload: action }),
    openModal: (modalType, data) => dispatch({ type: actionTypes.OPEN_MODAL, payload: { modalType, data } }),
    closeModal: (modalType) => dispatch({ type: actionTypes.CLOSE_MODAL, payload: modalType }),
    logoutUser: () => dispatch({ type: actionTypes.LOGOUT_USER }),
    getAllProperties,
    applyFilters
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;

