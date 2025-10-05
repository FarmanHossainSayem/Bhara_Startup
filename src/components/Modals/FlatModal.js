import React from 'react';
import { useApp } from '../../context/AppContext';
import Modal from './Modal';
import Button from '../Common/Button';
import { contactOwner } from '../../utils/contactUtils';
import './FlatModal.css';

const FlatModal = () => {
  const { state, actions } = useApp();
  const { isOpen, data: flat } = state.modals.flat;

  const handleClose = () => {
    actions.closeModal('flat');
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

  if (!flat) return null;

  const priceText = flat.type === 'rent' 
    ? `৳${flat.price.toLocaleString()}/month` 
    : `৳${flat.price.toLocaleString()}`;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={flat.name}
      className="flat-modal-content"
    >
      <div className="flat-details">
        <div className="flat-images">
          {flat.images && flat.images.length > 0 ? (
            flat.images.map((image, index) => (
              <div key={index} className="flat-image">
                <img 
                  src={image} 
                  alt={`${flat.name} - Image ${index + 1}`}
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-fallback" style={{ display: 'none' }}>
                  {index === 0 ? '🏢' : index === 1 ? '🛏️' : '🚿'}
                </div>
              </div>
            ))
          ) : (
            // Default emoji images if no images provided
            <>
              <div className="flat-image">🏢</div>
              <div className="flat-image">🛏️</div>
              <div className="flat-image">🚿</div>
            </>
          )}
        </div>
        
        <div className="flat-info">
          <div className="info-section">
            <h4>Basic Information</h4>
            <ul className="info-list">
              <li><span>Location</span><span>{flat.location}</span></li>
              <li><span>Size</span><span>{flat.size}</span></li>
              <li><span>Bedrooms</span><span>{flat.bedrooms}</span></li>
              <li><span>Bathrooms</span><span>{flat.bathrooms}</span></li>
              <li><span>Floor</span><span>{flat.floor}</span></li>
              <li><span>Status</span><span className={`flat-status status-${flat.status}`}>{flat.status}</span></li>
            </ul>
          </div>
          
          <div className="info-section">
            <h4>Price & Type</h4>
            <ul className="info-list">
              <li><span>Price</span><span>{priceText}</span></li>
              <li><span>Type</span><span>{flat.type === 'rent' ? 'For Rent' : 'For Sale'}</span></li>
            </ul>
            
            <h4>Facilities</h4>
            <ul className="info-list">
              {flat.facilities.map((facility, index) => (
                <li key={index}><span>{facility}</span><span>✓</span></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="info-section">
          <h4>Description</h4>
          <p>{flat.description}</p>
        </div>
        
        <div className="contact-buttons">
          <Button 
            variant="call" 
            className="btn-contact"
            onClick={() => initiateContact(flat.contact.phone, 'call')}
          >
            <i className="fas fa-phone"></i> Call
          </Button>
          <Button 
            variant="schedule" 
            className="btn-contact"
            onClick={() => initiateSchedule(flat.name, 'flat')}
          >
            <i className="fas fa-calendar"></i> Schedule Visit
          </Button>
          <Button 
            variant="virtual" 
            className="btn-contact"
            onClick={() => initiateSchedule(flat.name, 'virtual')}
          >
            <i className="fas fa-video"></i> Virtual Tour
          </Button>
          <Button 
            variant="whatsapp" 
            className="btn-contact"
            onClick={() => contactOwner(flat.contact.whatsapp, 'whatsapp')}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </Button>
          <Button 
            variant="email" 
            className="btn-contact"
            onClick={() => contactOwner(flat.contact.email, 'email')}
          >
            <i className="fas fa-envelope"></i> Email
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FlatModal;

