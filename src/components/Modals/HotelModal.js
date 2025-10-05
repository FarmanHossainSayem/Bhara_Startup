import React from 'react';
import { useApp } from '../../context/AppContext';
import Modal from './Modal';
import Button from '../Common/Button';
import { contactOwner } from '../../utils/contactUtils';

const HotelModal = () => {
  const { state, actions } = useApp();
  const { isOpen, data: hotel } = state.modals.hotel;

  const handleClose = () => {
    actions.closeModal('hotel');
  };

  const initiateContact = (contact, type) => {
    if (type === 'call' || state.isUserLoggedIn) {
      contactOwner(contact, type);
    } else {
      actions.setPendingAction({ action: 'contact', contact, type });
      actions.openModal('auth');
    }
  };

  const initiateSchedule = (propertyName, propertyType) => {
    if (!state.isUserLoggedIn) {
      actions.setPendingAction({ action: 'schedule', propertyName, propertyType });
      actions.openModal('auth');
    } else {
      actions.openModal('schedule', { propertyName, propertyType });
    }
  };

  if (!hotel) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={hotel.name}
    >
      <div className="flat-details">
        <div className="flat-images">
          <div className="flat-image">{hotel.image}</div>
          <div className="flat-image">🛏️</div>
          <div className="flat-image">🍽️</div>
        </div>
        
        <div className="flat-info">
          <div className="info-section">
            <h4>Hotel Information</h4>
            <ul className="info-list">
              <li><span>Location</span><span>{hotel.location}</span></li>
              <li><span>Price per night</span><span>৳{hotel.price.toLocaleString()}</span></li>
            </ul>
          </div>
          
          <div className="info-section">
            <h4>Facilities</h4>
            <ul className="info-list">
              {hotel.facilities.map((facility, index) => (
                <li key={index}><span>{facility}</span><span>✓</span></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="info-section">
          <h4>Description</h4>
          <p>{hotel.description}</p>
        </div>
        
        <div className="contact-buttons">
          <Button 
            variant="call" 
            className="btn-contact"
            onClick={() => initiateContact(hotel.contact.phone, 'call')}
          >
            <i className="fas fa-phone"></i> Call
          </Button>
          <Button 
            variant="schedule" 
            className="btn-contact"
            onClick={() => initiateSchedule(hotel.name, 'hotel')}
          >
            <i className="fas fa-calendar"></i> Book Room
          </Button>
          <Button 
            variant="whatsapp" 
            className="btn-contact"
            onClick={() => contactOwner(hotel.contact.whatsapp, 'whatsapp')}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </Button>
          <Button 
            variant="email" 
            className="btn-contact"
            onClick={() => contactOwner(hotel.contact.email, 'email')}
          >
            <i className="fas fa-envelope"></i> Email
          </Button>
          <Button 
            variant="secondary" 
            className="btn-contact"
            onClick={() => window.open(hotel.mapLink, '_blank')}
          >
            <i className="fas fa-map"></i> View on Map
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default HotelModal;

