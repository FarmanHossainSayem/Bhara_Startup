import React from 'react';
import { useApp } from '../../context/AppContext';
import DeveloperCard from './DeveloperCard';
import DeveloperModal from '../Modals/DeveloperModal';
import FlatModal from '../Modals/FlatModal';
import './RealEstateSection.css';

const RealEstateSection = () => {
  const { state } = useApp();

  // Filter developers based on search/filter criteria
  const getFilteredDevelopers = () => {
    const relevantFlats = state.filteredData.filter(item => item.category === 'real-estate');
    
    // Group by developer
    const groupedByDeveloper = {};
    relevantFlats.forEach(flat => {
      if (!groupedByDeveloper[flat.developerName]) {
        groupedByDeveloper[flat.developerName] = [];
      }
      groupedByDeveloper[flat.developerName].push(flat);
    });

    // Return developers that have matching flats
    return state.developers.filter(developer => {
      if (groupedByDeveloper[developer.name]) {
        return {
          ...developer,
          flats: groupedByDeveloper[developer.name],
          flatsCount: groupedByDeveloper[developer.name].length
        };
      }
      return false;
    }).map(developer => ({
      ...developer,
      flats: groupedByDeveloper[developer.name],
      flatsCount: groupedByDeveloper[developer.name].length
    }));
  };

  const filteredDevelopers = getFilteredDevelopers();

  return (
    <section 
      id="real-estate" 
      className={`section ${state.currentSection === 'real-estate' ? 'visible' : 'hidden'}`}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Real Estate Developers</h2>
          <p className="section-subtitle">
            Discover premium properties from trusted developers in Cumilla
          </p>
        </div>
        
        <div className="developers-grid">
          {filteredDevelopers.length > 0 ? (
            filteredDevelopers.map(developer => (
              <DeveloperCard key={developer.id} developer={developer} />
            ))
          ) : (
            <div className="no-results">
              <p>No developers found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <DeveloperModal />
      <FlatModal />
    </section>
  );
};

export default RealEstateSection;

