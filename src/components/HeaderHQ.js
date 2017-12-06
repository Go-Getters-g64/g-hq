import React, { Component } from 'react';
import DropDown from './DropDown'
import logo2 from '../g2.png';

class HeaderHQ extends Component {



  render() {

    return (
        <div>
          <header className='hqHeader'>
          <img className='headerLogo' src={logo2} alt="gHQ"/>
          <DropDown user={this.props.user}/>

          <div className='appButtonContainer'>

            <a onClick={this.props.toggleMeetup} className='appButtons'>Meetup <i className="fa fa-meetup" aria-hidden="true"></i></a>

            <a onClick={this.props.toggleCareerServices}className='appButtons'>Career Services <i className="fa fa-briefcase" aria-hidden="true"></i></a>
            <a onClick={this.props.toggleMastery}className='appButtons'>Mastery <i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
            <a className='appButtons'>Slack <i className="fa fa-slack" aria-hidden="true"></i></a>
            <button className='logOutButton'>Log Out</button>
          </div>
          </header>
        </div>
    );
  }
}

export default HeaderHQ;
