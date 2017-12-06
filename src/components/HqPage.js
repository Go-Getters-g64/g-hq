import React, { Component } from 'react';
import HeaderHQ from './HeaderHQ'
import DropDown from './DropDown'
import Meetup from './Meetup'
import logo2 from '../g2.png';

class HqPage extends Component {



  render() {
    return (
        <div>
          <HeaderHQ user={this.props.user} />
        </div>
    );
  }
}

export default HqPage;
