import React, { Component } from 'react';
import DropDown from './DropDown'
import logo2 from '../g2.png';

class Header extends Component {



  render() {
    return (
        <div>
          <header className='hqHeader'>
            <img className='headerLogo' src={logo2} alt="gHQ"/>
          </header>
        </div>
    );
  }
}

export default Header;