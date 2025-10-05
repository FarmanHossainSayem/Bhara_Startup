import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SearchSection from './components/Search/SearchSection';
import RealEstateSection from './components/RealEstate/RealEstateSection';
import HotelsSection from './components/Hotels/HotelsSection';
import StudentHostelsSection from './components/StudentHostels/StudentHostelsSection';
import Footer from './components/Footer/Footer';
import AuthModal from './components/Modals/AuthModal';
import ScheduleModal from './components/Modals/ScheduleModal';
import './App.css';

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="App">
          <Navbar />
          <Hero />
          <SearchSection />
          <RealEstateSection />
          <HotelsSection />
          <StudentHostelsSection />
          <Footer />
          
          {/* Modals */}
          <AuthModal />
          <ScheduleModal />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;

