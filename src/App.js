import React from 'react';
import HomePage from './pages/home/home.page' ;
import NuggetPage from './pages/nuggets/nugget.page' ;
import PortfolioPage from './pages/portfolio/portfolio.page' ;
import AboutPage from './pages/about/about.page' ;
import ContactPage from './pages/contact/contact.page' ;

import HeaderPage from './pages/header/header.page'

import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <HomePage />
      <NuggetPage />
      <PortfolioPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
