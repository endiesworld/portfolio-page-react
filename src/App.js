import React from 'react';
import {Route, Switch} from 'react-router-dom' ;
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
      <Switch>
      <Route exact path = '/'>
          <HomePage />
      </Route>
      <Route exact path = '/home'>
          <HomePage />
      </Route>
      <Route exact path = '/nugget'>
         <NuggetPage />
      </Route>
      <Route exact path = '/portfolio'>
          <PortfolioPage />
      </Route>  
      <Route exact path = '/about'>
          <AboutPage />
      </Route>  
      <Route exact  path = '/contact'>
         <ContactPage />
      </Route> 
      </Switch>  
    </div>
  );
}

export default App;
