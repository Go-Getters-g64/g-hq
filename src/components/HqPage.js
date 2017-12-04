import React, { Component } from 'react';
import Header from './Header'
import logo2 from '../g2.png';

class HqPage extends Component {



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