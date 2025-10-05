import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from './Modal';
import Button from '../Common/Button';
import './ScheduleModal.css';

const ScheduleModal = () => {
  const { state, actions } = useApp();
  const { isOpen, data } = state.modals.schedule;
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    visitType: 'in-person',
    visitDate: '',
    visitTime: '09:00',
    notes: ''
  });

  const handleClose = () => {
    actions.closeModal('schedule');
    setFormData({
      visitType: 'in-person',
      visitDate: '',
      visitTime: '09:00',
      notes: ''
    });
    setMessage({ type: '', text: '' });
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.visitDate) {
      showMessage('error', 'Please select a date');
      return;
    }
    
    setLoading(true);
    
    // Simulate scheduling
    setTimeout(() => {
      const visitTypeText = formData.visitType === 'in-person' ? 'In-person visit' : 'Virtual tour';
      showMessage('success', `${visitTypeText} scheduled for ${formData.visitDate} at ${formData.visitTime}`);
      
      setTimeout(() => {
        handleClose();
      }, 2000);
      
      setLoading(false);
    }, 2000);
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  if (!data) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Schedule Visit"
    >
      <div className="schedule-container">
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
        
        <h4>{data.propertyName}</h4>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Visit Type</label>
            <select 
              value={formData.visitType}
              onChange={(e) => handleInputChange('visitType', e.target.value)}
              required
            >
              <option value="in-person">In-Person Visit</option>
              <option value="virtual">Virtual Tour</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Preferred Date</label>
            <input 
              type="date" 
              value={formData.visitDate}
              onChange={(e) => handleInputChange('visitDate', e.target.value)}
              min={today}
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Preferred Time</label>
            <select 
              value={formData.visitTime}
              onChange={(e) => handleInputChange('visitTime', e.target.value)}
              required
            >
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Additional Notes (Optional)</label>
            <textarea 
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Any specific requirements or questions?"
            />
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            className="btn-full"
            loading={loading}
          >
            Schedule Visit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ScheduleModal;

