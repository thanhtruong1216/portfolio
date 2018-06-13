import React, { Component } from 'react';
import '../styles/projects.css';
import { Link } from 'react-router-dom';
import data from './Data';

class Projects extends Component {
  render() {
    return(
      <section className="projects-container">
        <h1>MY PROJECTS</h1>
        <div className="projects-wrapper">
          {data.projects.map((project) => {
            return(
              <div className="project">
                <Link key={project.id} to={`/${project.link}`} className="black-text">{project.name}</Link>
                <ul className="project-overview" style={project.styles}>
                  {project.skills.map((skill, key) => {
                    return (
                      <li className="skill" key={key}>{skill}</li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    )
  }
}

export default Projects;