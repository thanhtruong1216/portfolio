import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Header from './components/Header';
import 'react-chat-widget/lib/styles.css';
import './App.sass';
import './styles/Variables.sass';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import data from './components/Data';

const projecrUrls = data.projects.map((project) => {
  return project.carouselImage
})
const links = data.projects.map((project) => {
  return project.link
})

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
        <Header name="Thanh Truong" avatar={data.introduction.avatar} />
        <div className="navgation-links">
          <NavLink activeClassName="active-nav" to="/home">Home</NavLink>
          <NavLink activeClassName="active-nav" to="/about-me">About me</NavLink>
          <NavLink activeClassName="active-nav" to="/projects">Projects</NavLink>
          <NavLink activeClassName="active-nav" to="/thanh-locations">Thanh's locations</NavLink>
        </div>
        <div className="date-time">{this.state.date.toLocaleTimeString()}</div>
      </section>
    );
  }
}

export default App;
