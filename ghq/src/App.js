import React, { Component } from 'react';
import logo from './g.png';
import './App.css';
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import HqPage from './components/HqPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (
    <Router>
      <div>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/register"} component={Register} />
          <Route path={"/hq/:id"} component={HqPage} />
      </div>
    </Router>
    );
  }
}

export default App;
