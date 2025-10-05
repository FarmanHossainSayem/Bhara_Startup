import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false, 
  loading = false,
  className = '',
  type = 'button',
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className} ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`.trim();

  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {loading ? <span className="loading-spinner"></span> : children}
    </button>
  );
};

export default Button;

