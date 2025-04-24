import React from 'react';
import './Header.css';
import logoIcon from '../../images/logo.png';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container" onClick={() => scrollToSection('hero')}>
          <img src={logoIcon} alt="Логотип" className="logo-icon" />
          <h1 className="logo">NIZHNIY SHIELD</h1>
        </div>
        <nav className="nav">
          <a 
            href="#services" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Услуги
          </a>
          <a 
            href="#hero" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            О компании
          </a>
          <a 
            href="#contacts" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contacts');
            }}
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;