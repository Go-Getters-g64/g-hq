import React, { Component } from 'react';


class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const response = await
    fetch('https://galvanize-cors.herokuapp.com/https://api.meetup.com/find/upcoming_events?key=603d4e54316249506c5935491e2f3f55')
    const json = await response.json()
    this.setState({data: json})

    let meetupEvents = []
    for (var i = 0; i < 10; i++) {
      meetupEvents.push(this.state.data.events[i])
    }
    this.setState({data: meetupEvents})
    var data = this.state.data
    this.todaysMeetups(data)
  }

  todaysMeetups(data) {
    console.log(this.state.data[0]);
    var rootData = this.state.data

    for (var i = 0; i < rootData.length; i++) {
      console.log(rootData[i]);
      var eventName = rootData[i].name
      var groupName = rootData[i].group.name
      var date = rootData[i].local_date
      var time = rootData[i].local_time
      var venueName = rootData[i].venue.name
    }

  }

  render() {

    return (
        <div>
          <p>Show up</p>

        </div>
    );
  }
}

export default Meetup;
