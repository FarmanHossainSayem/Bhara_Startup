import React from 'react';
import { useApp } from '../../context/AppContext';
import Modal from './Modal';
import Button from '../Common/Button';
import { contactOwner } from '../../utils/contactUtils';

const HostelModal = () => {
  const { state, actions } = useApp();
  const { isOpen, data: hostel } = state.modals.hostel;

  const handleClose = () => {
    actions.closeModal('hostel');
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

  if (!hostel) return null;

  const statusClass = hostel.status === 'available' ? 'status-available-hostel' : 'status-occupied';

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={hostel.name}
    >
      <div className="flat-details">
        <div className="flat-images">
          <div className="flat-image">{hostel.image}</div>
          <div className="flat-image">🛏️</div>
          <div className="flat-image">📚</div>
        </div>
        
        <div className="flat-info">
          <div className="info-section">
            <h4>Hostel Information</h4>
            <ul className="info-list">
              <li><span>Location</span><span>{hostel.location}</span></li>
              <li><span>Price per month</span><span>৳{hostel.price.toLocaleString()}</span></li>
              <li><span>Capacity</span><span>{hostel.capacity} {hostel.capacity === 1 ? 'person' : 'people'}</span></li>
              <li><span>Room Type</span><span>{hostel.roomType}</span></li>
              <li><span>Gender</span><span>{hostel.gender}</span></li>
              <li><span>Status</span><span className={`flat-status ${statusClass}`}>{hostel.status}</span></li>
            </ul>
          </div>
          
          <div className="info-section">
            <h4>Facilities</h4>
            <ul className="info-list">
              {hostel.facilities.map((facility, index) => (
                <li key={index}><span>{facility}</span><span>✓</span></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="info-section">
          <h4>Description</h4>
          <p>{hostel.description}</p>
        </div>
        
        <div className="contact-buttons">
          <Button 
            variant="call" 
            className="btn-contact"
            onClick={() => initiateContact(hostel.contact.phone, 'call')}
          >
            <i className="fas fa-phone"></i> Call
          </Button>
          <Button 
            variant="schedule" 
            className="btn-contact"
            onClick={() => initiateSchedule(hostel.name, 'hostel')}
          >
            <i className="fas fa-calendar"></i> Schedule Visit
          </Button>
          <Button 
            variant="whatsapp" 
            className="btn-contact"
            onClick={() => contactOwner(hostel.contact.whatsapp, 'whatsapp')}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </Button>
          <Button 
            variant="email" 
            className="btn-contact"
            onClick={() => contactOwner(hostel.contact.email, 'email')}
          >
            <i className="fas fa-envelope"></i> Email
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default HostelModal;

