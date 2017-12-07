import React, { Component } from 'react';

class Mastery extends Component {
  render() {
    console.log(this.props.user)
    return (
          <div>
            <h2>Mastery Tracking</h2>
              <form action="">
              <label className="col-form-label" htmlFor="name">Name</label>
              <input required='required' className="form-control" id ="name" value={this.props.user.name} type="text"
              name="name"/>
              
              <label className="col-form-label" htmlFor="cohort">What DOMAIN does this MT standard fall under?</label>
              <select required='required' className="form-control" name="domain" id="domain">
                <option selected>Choose A Domain</option>
                <option value="Applied Technical Skills">Applied Technical Skills</option>
                <option value="Experience and Exposure">Experience and Exposure</option>
                <option value="Foundational Skills">Foundational Skills</option>
                <option value="General Skills">General Skills</option>
                <option value="Professional Skills & Interests">Professional Skills & Interests</option>
                <option value="Technical Skills">Technical Skills</option>
              </select>

              <label className="col-form-label" htmlFor="standard">What is the Standard?</label>
              <input required='required' className="form-control" id ="standard" value="" type="text"
              name="name"/>

              <label className="col-form-label" htmlFor="link">Please add your demonstration of this standard below (link, answers, project, etc.):</label>
              <input required='required'className="form-control" id ="link" value="" type="text"
              name="name"/>
              <a href="#"><button className='registerSubmit btn btn-info' type='submit'>Submit</button></a>
            </form>
          </div>
    );
  }
}

export default Mastery;