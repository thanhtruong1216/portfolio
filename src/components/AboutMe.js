import React, { Component } from 'react';
import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Navigator from './Navigator';
class AboutMe extends Component {
  render() {
    return (
      <section className="about-me">
        <Navigator />
        <Header />
        <Skills />
        <Education />
      </section>
    );
  }
}

export default AboutMe;
