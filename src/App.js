import React, { Component } from 'react';
import logo from './g.png';
import './App.css';
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import HqPage from './components/HqPage'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    data: [],
    loggedIn: false,
    user: [],
  }
}

  async componentDidMount() {
    const response = await fetch('https://blooming-dawn-66637.herokuapp.com/api/users')
    const json = await response.json()
    this.setState({data: json})
    console.log(this.state.data)
  }

  loginCheck(e) {
     e.preventDefault()
     let userData = {
       email: e.target.email.value,
       password: e.target.password.value,
     }
     for (var i = 0; i < this.state.data.length; i++) {
       if(this.state.data[i].email === userData.email && this.state.data[i].password === userData.password) {
         // console.log('success!')
         // console.log(userData);
         this.setState({user: this.state.data[i]}, () => {

           console.log(this.state.user);
         })

         this.setState({loggedIn: true})
       }
     }
  }

  render() {
    return (
    <Router>
      <div>
          <Route exact path={"/"} render={(props) => ( this.state.loggedIn ? (<Redirect to={`/hq/${this.state.user.id}`} />) : ( <LandingPage data={this.state.data} userInput={this.loginCheck.bind(this)} />)
          )} />
          <Route path={"/register"} render = {(props) => (<Register componentDidMount= {this.componentDidMount.bind(this)} />) } />
          <Route path={"/hq"} component={HqPage} />
      </div>
    </Router>
    );
  }
}

export default App;
