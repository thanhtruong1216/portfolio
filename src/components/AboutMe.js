import React, { Component } from 'react';
import Header from './Header';
import Navigator from './Navigator';
import Skills from './Skills';
import Footer from './Contact';
import Education from './Education';
import '../App.sass';
import '../styles/AboutMe.sass';
import data from './Data'
class AboutMe extends Component {
  render() {
    return (
      <section className="about-me-container">
        <Navigator />
        <div>
          <Header name={data.introduction.name} avatar={data.introduction.avatar}/>
          <Skills />
          <Education />
        </div>
        <Footer/>
      </section>
    );
  }
}

export default AboutMe;
