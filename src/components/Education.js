import React, { Component } from 'react';
import '../styles/Education.sass';
import '../styles/Experiences.sass'
import data from './Data';

class Education extends Component {
  render () {
    return (
      <section className="education">
        <h1>Educations & Experiences</h1>
        <div className="education__content-wrapper">
          <div>
            <h3>Degree</h3>
            {data.education.school.map((school,key) => (
              <div className="education__degree" key={key}>
                <div className="education__flex-box">
                  <p>{school.degree}</p>
                  <p>{school.year}</p>
                </div>
                <div className="education__flex-box">
                  <p>{school.school}</p>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3>Certificate(Online course)</h3>
            {data.education.certificate.map((school,key) => (
              <div className="education__certificates" key={key}>
                <div className="education__flex-box">
                  <p>{school.certificate}</p>
                  <p>{school.year}</p>
                </div>
                <div className="education__flex-box">
                  <p><a href={school.link}>See certificate</a></p>
                  <p>{school.school}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="experiences">
            <h3>Experiences</h3>
            {data.experiences.map((experience, key) => (
              <div className="experiences__content" key={key}>
                <div className="education__flex-box">
                  <p>{experience.job}</p>
                  <p>{experience.year}</p>
                </div>
                <div className="education__flex-box">
                  <div></div>
                  <p>{experience.company}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
    );
  }
}

export default Education;