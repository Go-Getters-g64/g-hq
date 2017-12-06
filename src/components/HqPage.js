import React, { Component } from 'react';
import HeaderHQ from './HeaderHQ'
import DropDown from './DropDown'
import Meetup from './Meetup'
import logo2 from '../g2.png';
import DailyPlan from './DailyPlan'

class HqPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetup: false
    }
  }

  toggleApp = (e) => {
    e.preventDefault()
    if (this.state.meetup === false) {
      this.setState({meetup: true})
    }
    console.log(this.state.meetup);
  }

  render() {
    console.log(this.props.user);
    return (
        <div>
          <HeaderHQ user={this.props.user}
            toggleApp={this.toggleApp} />

            <main>
              <div>
                <DailyPlan user={this.props.user} />
              </div>
              <div>
                {this.state.meetup ? <Meetup /> : null}
              </div>
            </main>
        </div>
    );
  }
}

export default HqPage;
