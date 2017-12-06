import React, { Component } from 'react';
import Header from './Header'

class Register extends Component {

  async createItem(item) {
    const response = await fetch('https://blooming-dawn-66637.herokuapp.com/api/users/new', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.props.componentDidMount()
  }

  registerUser(e) {
    e.preventDefault();
    let item = {
      subject: e.target.subject.value,
      body: e.target.body.value,
      name: e.target.name.value,
      email: e.target.email.value,
      cohort: e.target.cohort.value,
      github_handle: e.target.cohort.github_handle,
      linkedin_handle: e.target.linkedin_handle.value,
      password: e.target.password.value,
      role: e.target.role.value
    }
    this.createItem(item)
  }

  render() {
    return (
        <div>
        <a href="/"><Header /></a>
        <main className="registerMain">
          <h1>Register An Account</h1>
          
          <form>
            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Name</label>
                <input className="form-control" id ="name" placeholder="Your Name" type="text"
                name="name"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="email">Galvanize Email</label>
                <input required="required" id ="email" className="form-control" placeholder="example@gmail.com" type="email"
                name="email"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="cohort">Galvanize Cohort</label>
                <select className="form-control" name="cohort" id="cohort">
                  <option selected>Choose Your Cohort</option>
                  <option value="1">g64</option>
                  <option value="2">g70</option>
                  <option value="3">g75</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="github">Github URL</label>
                <input required="required" id = "github_handle" className="form-control" placeholder="http://www.github.com/example" type="url"
                name="github"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="linkedin">LinkedIn URL</label>
                <input required="required" id = "linkedin_handle" className="form-control" placeholder="http://www.linkedin.com/in/example" type="url"
                name="linkedin"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Password</label>
                <input required="required" id="password" className="form-control" placeholder="enter password" type="password"
                name="password"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Re-enter Password</label>
                <input required="required" className="form-control" placeholder="enter password" type="password"
                name="password"/>
              </div>
            </div>

            <input type="hidden" value="student" id="role"/>

            <a href="/hq/:id"><button className='registerSubmit btn btn-info' type='submit'>Submit</button></a>

          </form>
        </main>
      </div>
    );
  }
}

export default Register;