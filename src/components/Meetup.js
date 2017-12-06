import React, { Component } from 'react';


class Meetup extends Component {
  render() {
    return (
      <div>
        <a className='appButtons' href="#">Meetup <i className="fa fa-meetup" aria-hidden="true"></i></a>
        <div className='meetupLink'>
          <div className='meetup-content'>
            <p>This is the meetup component!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Meetup;
