import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Carousel from './components/Carousel';
import './App.sass';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import googleMapPic from './images/goolemapPic.png';
import matchingPic from './images/matchingPic.png';
import readablePic from './images/readablePic.png';

const projecrUrls = [googleMapPic, matchingPic, readablePic];
class App extends Component {
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
    return (
      <section className="App">
        <div className="date-time">{this.state.date.toLocaleTimeString()}</div>
        <div className="links">
          <Link className="nav-link" to="/about-me">About me</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
        </div>
        <Carousel imageUrls={projecrUrls} />
      </section>
    );
  }
}

export default App;
