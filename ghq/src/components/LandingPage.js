import React, { Component } from 'react';
import LoginForm from './LoginForm'
import LoginButtons from './LoginButtons'
import logo from '../g.png';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: true,
      form: false
    }
  }

  toggleForm(e) {
    if (this.state.buttons === true) {
      this.setState({buttons: false})
    } else {
      this.setState({form: true})
    }
  }

  render() {
    return (
        <div>
          <main>
           <img src={logo} class='logo' alt="logo" />
            <h1 >A portal for gStudents</h1>
            {this.state.buttons ?   <LoginButtons toggleForm={this.toggleForm.bind(this)}
             /> : <LoginForm />}
          </main>
        </div>
    );
  }
}

export default LandingPage;


