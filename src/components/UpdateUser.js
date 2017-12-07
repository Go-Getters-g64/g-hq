import React, { Component } from 'react';
import EditInfoSuccess from './EditInfoSuccess'

class UpdateUser extends Component {


  render() {
  return (
      <div>
        <a href="/"></a>
        <main className="registerMain">
          <h1>Update Your Account</h1>
          
          <form onSubmit={this.props.editUser}>
            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Name</label>
                <input className="form-control editUser" id ="name" placeholder={this.props.userData.name} type="text"
                name="name"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="email">Galvanize Email</label>
                <input required="required" id ="email" className="form-control editUser" placeholder={this.props.userData.email} type="email"
                name="email"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="cohort">Galvanize Cohort</label>
                <select className="form-control editUser" name="cohort" id="cohort">
                  <option>Choose Your Cohort</option>
                  <option selected value="1">g64</option>
                  <option value="2">g70</option>
                  <option value="3">g75</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="github">Github URL</label>
                
                <input required="required" id="github_handle" className="form-control editUser" placeholder={this.props.userData.github_handle} type="text" />
              
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="linkedin">LinkedIn URL</label>
                <input required="required" id = "linkedin_handle" className="form-control editUser" placeholder={this.props.userData.linkedin_handle} type="text"
                name="linkedin"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Password</label>
                <input required="required" id="password" className="form-control editUser" placeholder={this.props.userData.password} type="password"
                name="password"/>
              </div>
            </div>

            <input type="hidden" value={this.props.userData.role} id="role"/>

            <input type="hidden" value={this.props.userData.id} id="id"/>
            
            <button className='registerSubmit btn btn-info' type='submit'>Submit</button>

          </form>
          <button className='btn btn-info' onClick={this.props.editInfoToggle}>Confirm Change</button>
            {this.props.editInfo ? <EditInfoSuccess /> : null}
          
        </main>
      </div>
    )
  }
}

export default UpdateUser;