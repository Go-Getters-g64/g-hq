import React, { Component } from 'react';
import LoginForm from './LoginForm'
import LoginButtons from './LoginButtons'
import logo2 from '../g2.png';

class Header extends Component {



  render() {
    return (
        <div>
          <header>
          <img className='headerLogo' src={logo2} alt="gHQ"/>
          </header>
        </div>
    );
  }
}

export default Header;