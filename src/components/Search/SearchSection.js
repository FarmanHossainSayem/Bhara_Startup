import React from 'react';
import { useApp } from '../../context/AppContext';
import './SearchSection.css';

const SearchSection = () => {
  const { state, actions } = useApp();

  const handleSearchChange = (e) => {
    actions.setSearchTerm(e.target.value);
  };

  const handleTypeFilterChange = (e) => {
    actions.setTypeFilter(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    actions.setPriceFilter(e.target.value);
  };

  const handleLocationFilterChange = (e) => {
    actions.setLocationFilter(e.target.value);
  };

  return (
    <section 
      id="search" 
      className={`search-section ${state.currentSection === 'home' || state.currentSection === 'search' ? 'visible' : 'hidden'}`}
    >
      <div className="container">
        <div className="search-container">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              value={state.searchTerm}
              onChange={handleSearchChange}
              placeholder="Search flats, hotels, or developers..."
            />
          </div>
          <div className="filter-controls">
            <select 
              value={state.typeFilter}
              onChange={handleTypeFilterChange}
              className="filter-select"
            >
              <option value="all">All Types</option>
              <option value="rent">For Rent</option>
              <option value="sale">For Sale</option>
              <option value="hotel">Hotels</option>
              <option value="hostel">Student Hostels</option>
            </select>
            
            <select 
              value={state.priceFilter}
              onChange={handlePriceFilterChange}
              className="filter-select"
            >
              <option value="all">All Prices</option>
              <option value="0-10000">৳0 - ৳10,000</option>
              <option value="10000-25000">৳10,000 - ৳25,000</option>
              <option value="25000-50000">৳25,000 - ৳50,000</option>
              <option value="50000-100000">৳50,000 - ৳1,00,000</option>
              <option value="100000+">৳1,00,000+</option>
            </select>
            
            <select 
              value={state.locationFilter}
              onChange={handleLocationFilterChange}
              className="filter-select"
            >
              <option value="all">All Locations</option>
              <option value="kandirpar">Kandirpar</option>
              <option value="tomsom-bridge">Tomsom Bridge</option>
              <option value="cumilla-sadar">Cumilla Sadar</option>
              <option value="kotbari">Kotbari</option>
              <option value="cumilla-cantonment">Cumilla Cantonment</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;

