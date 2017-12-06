import React, { Component } from 'react';
import HeaderHQ from './HeaderHQ'
import DropDown from './DropDown'
import Meetup from './Meetup'
import logo2 from '../g2.png';
import DailyPlan from './DailyPlan'
import Mastery from './Mastery'
import CareerServices from './CareerServices'

class HqPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetup: false,
      mastery: false,
      careerServices: false
    }
  }

  toggleMeetup = (e) => {
    e.preventDefault()
    if (this.state.meetup === false) {
      this.setState({meetup: true})
    }
    this.setState({
      mastery: false,
      careerServices: false
    })
  }

  toggleMastery = (e) => {
    e.preventDefault()
    if (this.state.mastery === false) {
      this.setState({mastery: true})
    }
    this.setState({
      meetup: false,
      careerServices: false
    })
  }

  toggleCareerServices = (e) => {
    e.preventDefault()
    if (this.state.careerServices === false) {
      this.setState({careerServices: true})
    }
    this.setState({
      meetup: false,
      mastery: false
    })
  }

  render() {
    console.log(this.props.user);
    return (
        <div>
          <HeaderHQ user={this.props.user}
            toggleMeetup={this.toggleMeetup}
            toggleMastery={this.toggleMastery}
            toggleCareerServices={this.toggleCareerServices}
             />

            <main class='hqMain'>
              <div>
                <DailyPlan user={this.props.user} />
              </div>            
              <div class='variableComponent'>
                {this.state.meetup ? <Meetup /> : null}
                {this.state.mastery ? <Mastery user={this.props.user} /> : null}
                {this.state.careerServices ? <CareerServices user={this.props.user} /> : null}
              </div>
            </main>
        </div>
    );
  }
}

export default HqPage;
