import React, { Component } from 'react';
import logo from './g.png';
import './App.css';
import LoginButtons from './components/LoginButtons'
import LoginForm from './components/LoginForm'

class App extends Component {
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
          <div className='container'>
            <div className='row justify-content center'>
              <div className='col-4'>
                <img src={logo} class='logo' alt="logo" />
              </div>
              <div className='col-4'>
                <h1 >A portal for gStudents</h1>
              </div>
            </div>
            {this.state.buttons ? <LoginButtons toggleForm={this.toggleForm.bind(this)}
        /> : <LoginForm />}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
