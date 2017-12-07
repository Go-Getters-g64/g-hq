import React, { Component } from 'react';
import HeaderHQ from './HeaderHQ'
import DropDown from './DropDown'
import Meetup from './Meetup'
import logo2 from '../g2.png';
import DailyPlan from './DailyPlan'
import Mastery from './Mastery'
import CareerServices from './CareerServices'
import UpdateUser from './UpdateUser'

class HqPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetup: true,
      mastery: false,
      careerServices: false,
      loggedIn: this.props.loggedIn,
      user: this.props.user,
      editUser: false,
      editInfo: false
    }
  }

  toggleMeetup = (e) => {
    e.preventDefault()
    if (this.state.meetup === false) {
      this.setState({meetup: true})
    }
    this.setState({
      mastery: false,
      careerServices: false,
      editUser: false
    })
  }

  toggleMastery = (e) => {
    e.preventDefault()
    if (this.state.mastery === false) {
      this.setState({mastery: true})
    }
    this.setState({
      meetup: false,
      careerServices: false,
      editUser: false
    })
  }

  toggleCareerServices = (e) => {
    e.preventDefault()
    if (this.state.careerServices === false) {
      this.setState({careerServices: true})
    }
    this.setState({
      meetup: false,
      mastery: false,
      editUser: false
    })
  }

  toggleEditUser = (e) => {
    e.preventDefault()
    if (this.state.careerServices === false) {
      this.setState({editUser: true})
    }
    this.setState({
      meetup: false,
      mastery: false,
      careerServices: false
    })
  }

  toggleEditInfoSuccess = (e) => {
    e.preventDefault()
    if (this.state.editInfo===false) {
    this.setState({ editInfo:true })
    }
  }


  render() {
    return (
        <div>
          <HeaderHQ user={this.props.user}
            toggleMeetup={this.toggleMeetup}
            toggleMastery={this.toggleMastery}
            toggleCareerServices={this.toggleCareerServices}
            toggleEditUser={this.toggleEditUser}
             />

            <main class='hqMain'>
              <DailyPlan user={this.props.user} />
              <div class='variableComponent'>
                {this.state.meetup ? <Meetup /> : null}
                {this.state.mastery ? <Mastery user={this.props.user} /> : null}
                {this.state.careerServices ? <CareerServices user={this.props.user} /> : null}
                {this.state.editUser ? <UpdateUser editInfo={this.state.editInfo} editInfoToggle={this.toggleEditInfoSuccess} userData={this.props.user} editUser={this.props.editUser} /> : null}
              </div>
            </main>
        </div>
    );
  }
}

export default HqPage;
