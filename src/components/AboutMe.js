import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Skills from './Skills';
import Footer from './Contact';
import Education from './Education';
import '../App.sass';
import '../styles/AboutMe.sass';
class AboutMe extends Component {
  render() {
    return (
      <section className="about-me-container">
        <div>
          <Header />
          <Skills />
          <Education />
        </div>
        <Footer/>
      </section>
    );
  }
}

export default AboutMe;
