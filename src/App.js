import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';

class App extends Component {
  render() {
  return (
    <div className="App">
      <div className="hero">
        <h3>
          Hello homepage App
          <Hero />
        </h3>
      </div>
    </div>
  );
}
}

export default App;
