import React from 'react';
import { useApp } from '../../context/AppContext';
import HostelCard from './HostelCard';
import HostelModal from '../Modals/HostelModal';
import './StudentHostelsSection.css';

const StudentHostelsSection = () => {
  const { state } = useApp();

  // Filter hostels based on search/filter criteria
  const getFilteredHostels = () => {
    return state.filteredData.filter(item => item.category === 'hostel');
  };

  const filteredHostels = getFilteredHostels();

  return (
    <section 
      id="student-hostels" 
      className={`section ${state.currentSection === 'student-hostels' ? 'visible' : 'hidden'}`}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Student Hostels</h2>
          <p className="section-subtitle">
            Affordable and comfortable accommodation for students in Cumilla
          </p>
        </div>
        
        <div className="hostels-grid">
          {filteredHostels.length > 0 ? (
            filteredHostels.map(hostel => (
              <HostelCard key={hostel.id} hostel={hostel} />
            ))
          ) : (
            <div className="no-results">
              <p>No hostels found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <HostelModal />
    </section>
  );
};

export default StudentHostelsSection;

