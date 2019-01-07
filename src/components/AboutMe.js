import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import '../App.sass';
import '../styles/AboutMe.sass';
class AboutMe extends Component {
  render() {
    return (
      <section className="about-me-container">
        <div className="links">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
        </div>
        <Header />
        <Skills />
        <Education />
      </section>
    );
  }
}

export default AboutMe;
