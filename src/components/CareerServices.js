import React, { Component } from 'react';

class CareerServices extends Component {
  render() {
    return (
          <div>
            <h2>Career Services</h2>
              <form action="">
              <label className="col-form-label" htmlFor="name">Name</label>
              <input required='required' className="form-control" id ="name" value={this.props.user.name} type="text"
              name="name"/>

              <label className="col-form-label" htmlFor="fileType">What kind of document are you sending?</label>
              <input required='required' className="form-control" id ="fileType" value="" type="text"/>

              <label className="col-form-label" htmlFor="link">Please add your document link below (resume, cover letter, etc.):</label>
              <input required='required'className="form-control" id ="link" value="" type="text"/>
              <a href="#"><button className='registerSubmit btn btn-info' type='submit'>Submit</button></a>
            </form>
          </div>
    );
  }
}

export default CareerServices;