import React, { Component } from 'react';
import data from './Data';
import '../styles/Skills.sass';
import '../styles/Project.sass';
class Skills extends Component {
  render() {
    return(
      <div className="skills">
        <h1>Skills</h1>
        <div className="skills__wrapper">
          {data.skills.map(skill => (
            <div className={skill.id} key={skill.id}>
              <p className="skills__skill-name">{skill.name}</p>
              <section className="skills__levels-bar">
                <div className="skills__level-bar skills__level-1" title="Beginer"></div>
                <div className="skills__level-bar skills__level-2" title="Intermediate"></div>
                <div className="skills__level-bar skills__level-3" title="Advanced"></div>
                <div className="skills__level-bar skills__level-4" title="Expert"></div>
              </section>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Skills;