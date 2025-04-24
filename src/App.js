import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import Contacts from './components/contacts/Contacts';

const App = () => {
  return (
    <div className="app">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <Footer />
    </div>
  );
};

export default App;