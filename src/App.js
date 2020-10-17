import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';
import Work from './components/Work';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

class App extends Component {
  render() {
  return (
    <div className="App">
      <div className="hero">
        <h3>
          <Navbar />
          <Hero />
          <div>
          <Work /> 
          <Skills />
          </div>
        </h3>
      </div>
    </div>
  );
}
}

export default App;
