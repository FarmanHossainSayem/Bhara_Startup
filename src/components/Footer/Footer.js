import React from 'react';
import { useApp } from '../../context/AppContext';
import './Footer.css';

const Footer = () => {
  const { actions } = useApp();

  const handleNavClick = (section) => {
    actions.setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Bhara</h3>
            <p>Your trusted partner for finding the perfect home and stay in Cumilla.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button onClick={() => handleNavClick('home')}>Home</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('real-estate')}>Real Estate</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('hotels')}>Hotels</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('student-hostels')}>Student Hostels</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('search')}>Search</button>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p><i className="fas fa-phone"></i> +880-XXX-XXXXXX</p>
            <p><i className="fas fa-envelope"></i> info@bhara.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Cumilla, Bangladesh</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Bhara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

