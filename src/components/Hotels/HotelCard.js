import React from 'react';
import { useApp } from '../../context/AppContext';
import Button from '../Common/Button';
import { contactOwner } from '../../utils/contactUtils';

const HotelCard = ({ hotel }) => {
  const { actions } = useApp();

  const handleDetailsClick = () => {
    actions.openModal('hotel', hotel);
  };

  const handleBookClick = (e) => {
    e.stopPropagation();
    contactOwner(hotel.contact.phone, 'call');
  };

  return (
    <div className="hotel-card" onClick={handleDetailsClick}>
      <div className="hotel-image">{hotel.image}</div>
      <div className="hotel-content">
        <h3 className="hotel-name">{hotel.name}</h3>
        <p className="hotel-location">
          <i className="fas fa-map-marker-alt"></i> {hotel.location}
        </p>
        <div className="hotel-price">৳{hotel.price.toLocaleString()}/night</div>
        <div className="hotel-actions">
          <Button variant="primary" size="small">
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="small" 
            onClick={handleBookClick}
          >
            <i className="fas fa-phone"></i> Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

