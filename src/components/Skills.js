import React, { Component } from 'react';
import data from './Data';
import '../styles/Skills.css';
import '../styles/Project.css';

class Skills extends Component {
  render() {
    return(
      <div className="skills-container">
        <h1>MY SKILLS</h1>
        <ul className="skill-wrapper">
          {data.skills.map((skill, key) => (
            <li key={key} className="skill">{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Skills;