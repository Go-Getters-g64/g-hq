import React, { Component } from 'react';

class LoginButtons extends Component {
  render() {
    return (
          <div>
            <button onClick={this.props.toggleForm}className='btn btn-info btn-lg'>Login</button>
            <button className='btn btn-info btn-lg'>Register</button>
          </div>
    );
  }
}

export default LoginButtons;
