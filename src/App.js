import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { Parallax, Background } from 'react-parallax';
import AboutMe from './components/AboutMe';
import Carousel from './components/Carousel';
import Navigator from './components/Navigator';
import Contact from './components/Contact';
import './App.sass';
import './styles/Variables.sass';
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
        <div>
          <div className="date-time">{this.state.date.toLocaleTimeString()}</div>
          <Navigator />
          <Carousel imageUrls={projecrUrls} />
        </div>
        <Contact />
      </section>
    );
  }
}

export default App;
