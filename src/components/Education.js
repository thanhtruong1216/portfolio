import React, { Component } from 'react';
import '../styles/Education.css'
import data from './Data';

class Education extends Component {
  render () {
    return (
      <section className="education-container">
        <h1>Education</h1>
        <div>
          <h3>School</h3>
          {data.education.school.map((school,key) => {
            return (
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
            )
          })}
        </div>
        <div>
          <h3>Certificate</h3>
          {data.education.certificate.map((school,key) => {
            return (
              <div className="certificate" key={key}>
                <div className="flex-box">
                  <div>{school.certificate}</div>
                  <div>{school.year}</div>
                </div>
                <div className="flex-box">
                  <div>{school.school}</div>
                  <div>{school.country}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    );
  }
}

export default Education;