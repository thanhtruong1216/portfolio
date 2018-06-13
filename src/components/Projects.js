import React, { Component } from 'react';
import '../styles/projects.css';
import { Link } from 'react-router-dom';
import projectList from './ProjectList';

class Projects extends Component {
  render() {
    return(
      <section className="features-work-container">
        <h1>my projects</h1>
        <div className="projects-wrapper">
          {projectList.map((project) => {
            return(
              <div className="project">
                <Link key={project.id} to={`/${project.link}`}>{project.name}</Link>
                <div className="project-overview" style={project.styles}>
                  {project.skills.map(skill => {
                    return (
                      <span className="skill">{skill}</span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    )
  }
}

export default Projects;