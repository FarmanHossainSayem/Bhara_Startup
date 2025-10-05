import React from 'react';
import { useApp } from '../../context/AppContext';

const DeveloperCard = ({ developer }) => {
  const { actions } = useApp();

  const handleClick = () => {
    actions.openModal('developer', developer);
  };

  return (
    <div className="developer-card" onClick={handleClick}>
      <div className="developer-logo">
        {developer.logoImage ? (
          <img 
            src={developer.logoImage} 
            alt={`${developer.name} logo`}
            onError={(e) => {
              // Fallback to text logo if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="logo-fallback" style={{ display: developer.logoImage ? 'none' : 'flex' }}>
          {developer.logo}
        </div>
      </div>
      <h3 className="developer-name">{developer.name}</h3>
      <p className="developer-flats">{developer.flatsCount} properties available</p>
    </div>
  );
};

export default DeveloperCard;

