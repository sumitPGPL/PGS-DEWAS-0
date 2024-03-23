// Modal.js
import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
    <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
    <div className="absolute bg-white rounded-lg shadow-lg p-8 overflow-y-auto" style={{ maxHeight: '80vh' }}>
      <span className="absolute top-0 right-0 text-gray-700 cursor-pointer" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
      {children}
    </div>
  </div>
  );
};

export default Modal;
