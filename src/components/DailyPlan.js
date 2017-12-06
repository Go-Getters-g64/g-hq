import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

class DailyPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daily: [],
      userDaily: [],
    }
  }

  async componentDidMount() {
    const response = await fetch('https://blooming-dawn-66637.herokuapp.com/api/daily')
    const json = await response.json()
    this.setState({daily: json})
    console.log(this.state.daily)

    let userPlans = [];
    for (var i = 0; i < this.state.daily.length; i++) {
      if(this.state.daily[i].cohort == this.props.user.cohort){
        userPlans.push(this.state.daily[i])
      }
    }
    this.setState({userDaily: userPlans}, ()=>{
      console.log(this.state.userDaily);
    })
  }

  dailyDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10){
      dd='0'+dd;
    }
    if(mm<10){
      mm='0'+mm;
    }
    var today2 = mm+'/'+dd+'/'+yyyy;
    console.log(today);
    return today2
  }

  oneDaily() {
    for (var i = 0; i < this.state.userDaily.length; i++) {
      if(this.state.userDaily[i].date == document.getElementById('date').innerText) {
        console.log('YES');
        return this.state.userDaily[i].plan
      }else {
        console.log("NO!");
      }
    }
  }

  backOneDay() {
    let date = document.getElementById('date').innerText
    let newDate = date.split('/')
    let day = newDate[1] - 1
    document.getElementById('date').innerText = newDate[0]+'/0'+day.toString()+'/'+newDate[2]

  }

  render () {
    return (
      <div id="dailyPlanArea">
        <div id="dailyHead">
          <a onClick={this.backOneDay}><i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i></a>
          <h1 id="date">{this.dailyDate()}</h1>
          <a onClick=""><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i></a>
        </div>
        <br />
        <ReactMarkdown source={this.oneDaily()} />
      </div>
    )
  }
}

export default DailyPlan
