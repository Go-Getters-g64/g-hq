import React, { Component } from 'react';
import logo from './g.png';
import './App.css';
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Route exact path={"/"} component={LandingPage} />
          
        </Router>
      </div>
    );
  }
}

export default App;
