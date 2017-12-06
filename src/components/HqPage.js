import React, { Component } from 'react';
import HeaderHQ from './HeaderHQ'
import DropDown from './DropDown'
import Meetup from './Meetup'
import logo2 from '../g2.png';
import DailyPlan from './DailyPlan'

class HqPage extends Component {



  render() {
    console.log(this.props.user);
    return (
        <div>
          <HeaderHQ user={this.props.user} />
          <DailyPlan user={this.props.user} />
        </div>
    );
  }
}

export default HqPage;
