import React from 'react';
import { useApp } from '../../context/AppContext';
import Modal from './Modal';
import FlatCard from '../RealEstate/FlatCard';

const DeveloperModal = () => {
  const { state, actions } = useApp();
  const { isOpen, data: developer } = state.modals.developer;

  const handleClose = () => {
    actions.closeModal('developer');
  };

  if (!developer) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={developer.name}
    >
      <div className="flats-grid">
        {developer.flats.map(flat => (
          <FlatCard key={flat.id} flat={flat} />
        ))}
      </div>
    </Modal>
  );
};

export default DeveloperModal;

