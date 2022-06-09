import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';

class Clock extends React.Component{
  state= {date: new Date()};

  componentDidMount(){
    this.clockTimer=setInterval(()=>this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  tick(){
        this.setState({
        date: new Date(),
      });
  }

  render(){
    return(
  <h1 className="heading">
  <span className="text">Today's {this.props.children} {this.state.date.toLocaleTimeString(this.props.locale)}</span>
  </h1>);
  }
}

export default Clock;