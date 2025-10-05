import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import './Navbar.css';

const Navbar = () => {
  const { state, actions } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    actions.setCurrentSection(section);
    setIsMenuOpen(false);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    actions.toggleDarkMode();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Bhara</h2>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button 
              className={`nav-link ${state.currentSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${state.currentSection === 'real-estate' ? 'active' : ''}`}
              onClick={() => handleNavClick('real-estate')}
            >
              Real Estate
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${state.currentSection === 'hotels' ? 'active' : ''}`}
              onClick={() => handleNavClick('hotels')}
            >
              Hotels
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${state.currentSection === 'student-hostels' ? 'active' : ''}`}
              onClick={() => handleNavClick('student-hostels')}
            >
              Student Hostels
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${state.currentSection === 'search' ? 'active' : ''}`}
              onClick={() => handleNavClick('search')}
            >
              Search
            </button>
          </li>
        </ul>
        
        <div className="nav-controls">
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            <i className={`fas ${state.darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

