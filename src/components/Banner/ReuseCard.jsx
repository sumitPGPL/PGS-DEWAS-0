// Card.js
import React from 'react';

const Card = ({ title, content, buttonText, onClick }) => {
  return (
    <div className="block rounded-lg bg-white p-6 text-surface shadow-md dark:bg-surface-dark dark:text-white border-2 mb-2">
      <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
      <p className="mb-4 text-base">{content}</p>
      <button
        type="button"
        className="bg-black text-white rounded-lg p-2"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
