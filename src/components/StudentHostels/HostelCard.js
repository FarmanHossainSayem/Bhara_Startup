import React from 'react';
import { useApp } from '../../context/AppContext';
import Button from '../Common/Button';

const HostelCard = ({ hostel }) => {
  const { state, actions } = useApp();

  const handleDetailsClick = () => {
    actions.openModal('hostel', hostel);
  };

  const initiateContact = (contact, type) => {
    if (type === 'call' || state.isUserLoggedIn) {
      window.open(`tel:${contact}`);
    } else {
      actions.setPendingAction({ action: 'contact', contact, type });
      actions.openModal('auth');
    }
  };

  const handleCallClick = (e) => {
    e.stopPropagation();
    initiateContact(hostel.contact.phone, 'call');
  };

  const statusClass = hostel.status === 'available' ? 'status-available-hostel' : 'status-occupied';

  return (
    <div className="hostel-card" onClick={handleDetailsClick}>
      <div className="hostel-image">{hostel.image}</div>
      <div className="hostel-content">
        <h3 className="hostel-name">{hostel.name}</h3>
        <p className="hostel-location">
          <i className="fas fa-map-marker-alt"></i> {hostel.location}
        </p>
        <div className="hostel-price">৳{hostel.price.toLocaleString()}/month</div>
        <p className="text-secondary mb-1">
          <i className="fas fa-users"></i> {hostel.capacity} {hostel.capacity === 1 ? 'person' : 'people'} • 
          <i className="fas fa-bed"></i> {hostel.roomType}
        </p>
        <span className={`flat-status ${statusClass}`}>{hostel.status}</span>
        <div className="hostel-actions mt-2">
          <Button variant="primary" size="small">
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="small" 
            onClick={handleCallClick}
          >
            <i className="fas fa-phone"></i> Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HostelCard;

