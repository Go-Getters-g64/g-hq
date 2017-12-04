import React, { Component } from 'react';
import Header from './Header'

class Register extends Component {



  render() {
    return (
        <div>
        <a href="/"><Header /></a>
          <main className="registerMain">
          
          <form >
            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Name</label>
                <input className="form-control" placeholder="Your Name" type="text"
                name="name"/>
              </div>
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Password</label>
                <input required="required" className="form-control" placeholder="enter password" type="password"
                name="password"
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="email">Galvanize Email</label>
                <input required="required" className="form-control" placeholder="example@gmail.com" type="email"
                name="email"/>
              </div>
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Re-enter Password</label>
                <input required="required" className="form-control" placeholder="enter password" type="password"
                name="password"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="cohort">Galvanize Cohort</label>
                <select className="form-control" name="cohort">
                  <option selected>Choose Your Cohort</option>
                  <option value="g64">g64</option>
                  <option value="g70">g70</option>
                  <option value="g75">g75</option>
                </select>
              </div>
              <button className='registerSubmit btn btn-info' type='submit'>Submit</button>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="github">Github URL</label>
                <input required="required" className="form-control" placeholder="http://www.github.com/example" type="url"
                name="github"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="linkedin">LinkedIn URL</label>
                <input required="required" className="form-control" placeholder="http://www.linkedin.com/in/example" type="url"
                name="linkedin"/>
              </div>
            </div>

        
          </form>
          </main>
        </div>
    );
  }
}

export default Register;