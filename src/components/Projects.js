import React, { Component } from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';
import data from './Data';

class Projects extends Component {
  render() {
    return(
      <section className="projects-container">
        <h1>Project</h1>
        <div className="projects-wrapper">
          {data.projects.map(project => (
            <div key={project.id} className="project">
              <Link key={project.id} to={`/projects/${project.link}`}>
                <h2>{project.name}</h2>
              </Link>
              <div className="project-overview-wrapper">
              <ul className="project-overview" style={project.styles}>
                  {project.skills.map((skill, key) => {
                    return (
                      <li className="project-skill" key={key}>{skill}</li>
                    );
                  })}
                </ul>
                <img src={project.image} className="project-image"/>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default Projects;