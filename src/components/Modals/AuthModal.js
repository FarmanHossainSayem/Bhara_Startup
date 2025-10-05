import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from './Modal';
import Button from '../Common/Button';
import './AuthModal.css';

const AuthModal = () => {
  const { state, actions } = useApp();
  const { isOpen } = state.modals.auth;
  
  const [activeTab, setActiveTab] = useState('signin');
  const [authMethod, setAuthMethod] = useState('email');
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleClose = () => {
    actions.closeModal('auth');
    setActiveTab('signin');
    setAuthMethod('email');
    setShowOTP(false);
    setMessage({ type: '', text: '' });
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const handleSuccessfulAuth = (user) => {
    actions.setCurrentUser(user);
    actions.setUserLogin(true);
    showMessage('success', 'Successfully authenticated!');
    
    setTimeout(() => {
      handleClose();
      
      // Execute pending action if any
      if (state.pendingAction) {
        if (state.pendingAction.action === 'contact') {
          // Handle contact action
          window.open(`tel:${state.pendingAction.contact}`);
        } else if (state.pendingAction.action === 'schedule') {
          actions.openModal('schedule', {
            propertyName: state.pendingAction.propertyName,
            propertyType: state.pendingAction.propertyType
          });
        }
        actions.setPendingAction(null);
      }
    }, 1500);
  };

  const authenticateWithGoogle = async () => {
    setLoading(true);
    
    // Simulate Google authentication
    setTimeout(() => {
      const user = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        provider: "google"
      };
      handleSuccessfulAuth(user);
      setLoading(false);
    }, 2000);
  };

  const sendOTP = async (phoneNumber) => {
    if (!phoneNumber) {
      showMessage('error', 'Please enter your phone number');
      return;
    }
    
    setLoading(true);
    
    // Simulate OTP sending
    setTimeout(() => {
      setShowOTP(true);
      showMessage('success', 'OTP sent to your phone number!');
      setLoading(false);
    }, 2000);
  };

  const verifyOTP = async (otp, formData) => {
    if (!otp || otp.length !== 6) {
      showMessage('error', 'Please enter a valid 6-digit OTP');
      return;
    }
    
    setLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      const user = {
        name: formData.name || "User",
        phone: formData.phone,
        provider: "phone"
      };
      handleSuccessfulAuth(user);
      setLoading(false);
    }, 2000);
  };

  const handleEmailAuth = async (formData) => {
    if (!formData.email || !formData.password) {
      showMessage('error', 'Please fill in all fields');
      return;
    }
    
    setLoading(true);
    
    // Simulate email authentication
    setTimeout(() => {
      const user = {
        name: formData.name || "User",
        email: formData.email,
        provider: "email"
      };
      handleSuccessfulAuth(user);
      setLoading(false);
    }, 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={activeTab === 'signin' ? 'Sign In to Continue' : 'Create Your Account'}
      className="auth-modal-content"
    >
      <div className="auth-container">
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
        
        <div className="auth-tabs">
          <button 
            className={`auth-tab ${activeTab === 'signin' ? 'active' : ''}`}
            onClick={() => setActiveTab('signin')}
          >
            Sign In
          </button>
          <button 
            className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>
        
        <AuthForm
          activeTab={activeTab}
          authMethod={authMethod}
          setAuthMethod={setAuthMethod}
          loading={loading}
          showOTP={showOTP}
          onGoogleAuth={authenticateWithGoogle}
          onSendOTP={sendOTP}
          onVerifyOTP={verifyOTP}
          onEmailAuth={handleEmailAuth}
        />
      </div>
    </Modal>
  );
};

const AuthForm = ({ 
  activeTab, 
  authMethod, 
  setAuthMethod, 
  loading, 
  showOTP, 
  onGoogleAuth, 
  onSendOTP, 
  onVerifyOTP, 
  onEmailAuth 
}) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (authMethod === 'phone') {
      if (!showOTP) {
        onSendOTP(formData.phone);
      } else {
        onVerifyOTP(formData.otp, formData);
      }
    } else {
      onEmailAuth(formData);
    }
  };

  return (
    <div className="auth-form">
      <h4>Choose your {activeTab === 'signin' ? 'sign-in' : 'sign-up'} method</h4>
      
      <Button 
        variant="google" 
        className="btn-auth"
        onClick={onGoogleAuth}
        loading={loading}
      >
        <i className="fab fa-google"></i>
        {activeTab === 'signin' ? 'Continue with Google' : 'Sign up with Google'}
      </Button>
      
      <div className="auth-divider">
        <span>or</span>
      </div>
      
      <div className="auth-toggle-options">
        <button 
          className={`auth-option ${authMethod === 'email' ? 'active' : ''}`}
          onClick={() => setAuthMethod('email')}
        >
          <i className="fas fa-envelope"></i> Email
        </button>
        <button 
          className={`auth-option ${authMethod === 'phone' ? 'active' : ''}`}
          onClick={() => setAuthMethod('phone')}
        >
          <i className="fas fa-phone"></i> Phone
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="auth-method-form">
        {authMethod === 'email' ? (
          <>
            {activeTab === 'signup' && (
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={formData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required 
                />
              </div>
            )}
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder={activeTab === 'signin' ? 'Enter your password' : 'Create password'}
                value={formData.password || ''}
                onChange={(e) => handleInputChange('password', e.target.value)}
                required 
              />
            </div>
          </>
        ) : (
          <>
            {activeTab === 'signup' && (
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={formData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required 
                />
              </div>
            )}
            <div className="form-group">
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                value={formData.phone || ''}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required 
              />
            </div>
            {showOTP && (
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Enter OTP" 
                  maxLength="6"
                  value={formData.otp || ''}
                  onChange={(e) => handleInputChange('otp', e.target.value)}
                  required 
                />
              </div>
            )}
          </>
        )}
        
        <Button 
          type="submit" 
          variant="primary" 
          className="btn-full"
          loading={loading}
        >
          {authMethod === 'phone' && !showOTP 
            ? 'Send OTP' 
            : activeTab === 'signin' 
              ? 'Sign In' 
              : 'Create Account'
          }
        </Button>
      </form>
    </div>
  );
};

export default AuthModal;

