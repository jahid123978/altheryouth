// Card.js
import React from 'react';
import '../../styles/style.css';

const Mobile_card = ({ image, title, description }) => {
  return (
    <div className="mobile-card">
      <img src={image} alt={title} className="mobile-card-image" />
      <div className="mobile-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Mobile_card;
