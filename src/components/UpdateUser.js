import React, { Component } from 'react';
import MeetupIndividual from './MeetupIndividual'

class MeetupList extends Component {
  render() {
  return (
      <div>
        <a href="/"></a>
        <main className="registerMain">
          <h1>Update Your Account</h1>
          
          <form>
            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Name</label>
                <input className="form-control editUser" id ="name" placeholder="Your Name" type="text"
                name="name"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="email">Galvanize Email</label>
                <input required="required" id ="email" className="form-control editUser" placeholder="example@gmail.com" type="email"
                name="email"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="cohort">Galvanize Cohort</label>
                <select className="form-control editUser" name="cohort" id="cohort">
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
                
                <input required="required" id="github_handle" className="form-control editUser" placeholder="http://www.github.com/example <-- just the handle" type="text" />
              
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="linkedin">LinkedIn URL</label>
                <input required="required" id = "linkedin_handle" className="form-control editUser" placeholder="http://www.linkedin.com/in/example <-- just the handle" type="text"
                name="linkedin"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Password</label>
                <input required="required" id="password" className="form-control editUser" placeholder="enter password" type="password"
                name="password"/>
              </div>
            </div>

            <input type="hidden" value="student" id="role"/>
            
            <a href="/hq/:id"><button className='registerSubmit btn btn-info' type='submit'>Submit</button></a>

          </form>
        </main>
      </div>
    )
  }
}

export default MeetupList;