import React, { Component } from 'react';
import logo from './g.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <div className='container'>
            <div className='row justify-content center'>
              <div className='col-4'>
                <img src={logo} class='logo' alt="logo" />
              </div>
              <div className='col-4'>
                <h1 >A portal for gStudents</h1>
              </div>
            </div>
            <button className='btn btn-info btn-lg'>Login</button>
            <button className='btn btn-info btn-lg'>Register</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
