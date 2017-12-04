import React, { Component } from 'react';
import logo from './g.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}  alt="logo" />
        </header>
        <main>
          <h1 >gStudent HeadQuarters: a portal for Galvanize Students</h1>
          <button className='btn btn-info btn-lg'>Login</button>
          <button className='btn btn-info btn-lg'>Register</button>
        </main>
      </div>
    );
  }
}

export default App;
