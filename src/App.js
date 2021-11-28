import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  return (
      <React.Fragment>
        <Navigationbar />
        <Home />
        <Footer />
      </React.Fragment>
  );
}

export default App;
