import React from 'react';
import './Contacts.css';
import mapImage from '../../images/map.png';

const Contacts = () => {
  return (
    <section className="contacts-section">
      <div className="contacts-container">
        <h2 className="contacts-title">Свяжитесь с нами</h2>
        
        <div className="contacts-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="contact-details">
              <h3>Телефон</h3>
              <p>+7 (996) 566-82-41</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-details">
              <h3>Адрес</h3>
              <p>г. Нижний Новгород, проспект Ленина, д. 96</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>ns.rf.52@mail.ru</p>
            </div>
          </div>
        </div>
        
        <div className="map-container">
          <img 
            src={mapImage} 
            alt="Наше местоположение" 
            className="map-image"
          />
          {/* Закомментированный блок map-overlay
          <div className="map-overlay">
            <button className="map-button">
              <i className="fas fa-directions"></i> Построить маршрут
            </button>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Contacts;