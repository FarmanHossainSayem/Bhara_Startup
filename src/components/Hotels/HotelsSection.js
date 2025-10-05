import React from 'react';
import { useApp } from '../../context/AppContext';
import HotelCard from './HotelCard';
import HotelModal from '../Modals/HotelModal';
import './HotelsSection.css';

const HotelsSection = () => {
  const { state } = useApp();

  // Filter hotels based on search/filter criteria
  const getFilteredHotels = () => {
    return state.filteredData.filter(item => item.category === 'hotel');
  };

  const filteredHotels = getFilteredHotels();

  return (
    <section 
      id="hotels" 
      className={`section ${state.currentSection === 'hotels' ? 'visible' : 'hidden'}`}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Hotels & Residences</h2>
          <p className="section-subtitle">
            Comfortable stays and accommodations in Cumilla
          </p>
        </div>
        
        <div className="hotels-grid">
          {filteredHotels.length > 0 ? (
            filteredHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))
          ) : (
            <div className="no-results">
              <p>No hotels found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <HotelModal />
    </section>
  );
};

export default HotelsSection;

