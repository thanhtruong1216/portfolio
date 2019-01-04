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
                <div className="level-bar level-1" title="Beginer"></div>
                <div className="level-bar level-2" title="Intermediate"></div>
                <div className="level-bar level-3" title="Advanced"></div>
                <div className="level-bar level-4" title="Expert"></div>
              </section>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Skills;