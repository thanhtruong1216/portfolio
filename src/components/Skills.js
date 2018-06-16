import React, { Component } from 'react';
import data from './Data';
import '../styles/Skills.css';
import '../styles/Project.css';

class Skills extends Component {
  render() {
    return(
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="full-skills-wrapper">
          {data.skills.map(skill => (
            <div>
              <p className="skill-name">{skill}</p>
              <div class="skill-container">
                <div class="skills" id={skill}></div>
                <div className="level-bar">
                  <div>Beginner</div>
                  <div>Intermediate</div>
                  <div>Advanced</div>
                  <div>Expert</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Skills;