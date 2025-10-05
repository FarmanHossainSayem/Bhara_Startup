import React from 'react';
import { useApp } from '../../context/AppContext';
import Button from '../Common/Button';
import { contactOwner } from '../../utils/contactUtils';
import './FlatCard.css';

const FlatCard = ({ flat }) => {
  const { actions } = useApp();

  const handleDetailsClick = () => {
    actions.openModal('flat', flat);
  };

  const handleCallClick = (e) => {
    e.stopPropagation();
    contactOwner(flat.contact.phone, 'call');
  };

  const statusClass = `status-${flat.status}`;
  const priceText = flat.type === 'rent' 
    ? `৳${flat.price.toLocaleString()}/month` 
    : `৳${flat.price.toLocaleString()}`;

  return (
    <div className="flat-card" onClick={handleDetailsClick}>
      <div className="flat-header">
        <div>
          <h4 className="flat-name">{flat.name}</h4>
          <p className="flat-location">
            <i className="fas fa-map-marker-alt"></i> {flat.location}
          </p>
        </div>
        <span className={`flat-status ${statusClass}`}>{flat.status}</span>
      </div>
      <div className="flat-price">{priceText}</div>
      <div className="flat-actions">
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
  );
};

export default FlatCard;
