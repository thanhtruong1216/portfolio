import React, { Component } from 'react';
import '../styles/Heart.sass';
import heart from '../images/heart-solid.svg';
class Heart extends Component  {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount = ()  => {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return(
      <section className="heart">
        <div className="heart__time">{this.state.date.toLocaleTimeString()}</div>
        <div className="heart__author">
        Make with
          <img className="heart__icon" src={heart} alt="heart" />
        by Thanh</div>
      </section>
    )
  }
}

export default Heart;