import React, { Component } from 'react';
import data from './Data';
import '../styles/Skills.sass';
import '../styles/Project.sass';

class Skills extends Component {
  render() {
    return(
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="full-skills-wrapper">
          {data.skills.map(skill => (
            <div className={skill.id} key={skill.id}>
              <p className="skill-name">{skill.name}</p>
              <section className="skill-bar-container">
                <div className="level-1"></div>
                <div className="level-2" ></div>
                <div className="level-3"></div>
                <div className="level-4"></div>
              </section>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Skills;