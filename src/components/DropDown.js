import React, { Component } from 'react';


class DropDown extends Component {



  render() {
    return (
      <div>
         <div className="dropdown">
           <button className="dropbtn"><img className='studentPhoto'src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA3oAAAAJDAzNjUxYzliLTk5NGQtNGY3Yy05ODdkLTljMWIyZTVmNDQ3ZQ.jpg" alt=""/><i class="fa fa-sort-desc" aria-hidden="true"></i></button>
           <div className="dropdown-content">
            <a className="topLink" href="#">Edit Profile</a>
            <a href="https://www.linkedin.com/in/">Cohort</a>
            <a href="https://www.linkedin.com/in/" target="_blank">Members Portal</a>
            <a href="https://www.linkedin.com/in/" target="_blank">Talent Portal</a>
            <a href="https://www.linkedin.com/in/" target="_blank">Learn Curriculum</a>
            <a href="https://www.linkedin.com/in/" target="_blank">LinkedIn</a>
            <a href="https://github.com/" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/" target="_blank">Student Links</a>
            <a className="bottomLink" href="https://www.linkedin.com/in/"><i class="fa fa-plus" aria-hidden="true"></i> Add Link</a>
           </div>
        </div>
      </div>
    )
  }
}

export default DropDown;
