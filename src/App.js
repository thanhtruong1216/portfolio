import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Header from './components/Header';
import './App.sass';
import Heart from './components/Heart';
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
  render() {
    return (
      <section className="App">
        <div className="navgation-links">
          <Header name="Thanh Truong" avatar={data.introduction.avatar} />
          <NavLink activeClassName="active-nav" to="/about-me">About me</NavLink>
          <NavLink activeClassName="active-nav" to="/projects">Projects</NavLink>
          <NavLink activeClassName="active-nav" to="/thanh-locations">Thanh's locations</NavLink>
        </div>
        <Heart />
      </section>
    );
  }
}

export default App;
