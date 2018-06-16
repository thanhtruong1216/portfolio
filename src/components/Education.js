import React, { Component } from 'react';
import '../styles/Education.css'
import data from './Data';

class Education extends Component {
  render () {
    return (
      <section className="education-container">
        <h1>Educations & Experiences</h1>
        <div className="education-content-wrapper">
          <div>
            <h3>Degree</h3>
            {data.education.school.map((school,key) => (
              <div className="degree" key={key}>
                <div className="flex-box">
                  <div>{school.degree}</div>
                  <div>{school.year}</div>
                </div>
                <div className="flex-box">
                  <div>{school.school}</div>
                  <div>{school.country}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3>Certificate(Online course)</h3>
            {data.education.certificate.map((school,key) => (
              <div className="certificate" key={key}>
                <div className="flex-box">
                  <div>{school.certificate}</div>
                  <div>{school.year}</div>
                </div>
                <div className="flex-box">
                  <div><a href={school.link}>See certificate</a></div>
                  <div>{school.school}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
          <h3>Experiences</h3>
          {data.experiences.map((experience, key) => (
            <div className="experience" key={key}>
              <div className="flex-box">
                <div>{experience.job}</div>
                <div>{experience.year}</div>
              </div>
              <div className="flex-box">
                <div>{experience.company}</div>
                <div>{experience.location}</div>
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