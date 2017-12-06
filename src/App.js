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
    userCreated: false,
    loginSuccess: false
  }
}

  async componentDidMount() {
    const response = await fetch('https://blooming-dawn-66637.herokuapp.com/api/users')
    const json = await response.json()
    this.setState({data: json})
    console.log(this.state.data)
  }

  async createItem(item) {
    const response = await fetch('https://blooming-dawn-66637.herokuapp.com/api/users/new', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.componentDidMount()
    this.setState({userCreated: true})
    this.setState({loginSuccess: true})
  }



  registerUser(e) {
    e.preventDefault();
    let item = {
      name: e.target.name.value,
      email: e.target.email.value,
      cohort: e.target.cohort.value,
      github_handle: e.target.github_handle.value,
      linkedin_handle: e.target.linkedin_handle.value,
      password: e.target.password.value,
      role: e.target.role.value
    }
    this.createItem(item)
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

  async meetupApiMount() {
    const response = await fetch('https://api.meetup.com/find/upcoming_events?key=603d4e54316249506c5935491e2f3f55')
    const json = await response.json()
    this.setState({data: json})
    console.log(this.state.data)
  }



  render() {
    return (
    <Router>
      <div>
          <Route exact path={"/"} render={(props) => ( this.state.loggedIn ? (<Redirect to={`/hq/${this.state.user.id}`} />) : ( <LandingPage data={this.state.data} loginSuccess={this.state.loginSuccess}userInput={this.loginCheck.bind(this)} />)
          )} />
          <Route path={"/register"} render = {(props) => ( this.state.userCreated ? (<Redirect to={'/'} />) : ( <Register componentDidMount= {this.componentDidMount.bind(this)} registerUser = {this.registerUser.bind(this)} />)
          )} />
          <Route path={"/hq/:id"} render={(props) => ( <HqPage user={this.state.user}/>)} />
      </div>
    </Router>
    );
  }
}

export default App;
