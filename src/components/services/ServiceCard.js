import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="card-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-hover-effect"></div>
    </div>
  );
};

export default ServiceCard;