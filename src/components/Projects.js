import React, { Component } from 'react';
import '../styles/Projects.sass';
import '../App.sass';
import { Link } from 'react-router-dom';
import data from './Data';
import Footer from './Footer';
class Projects extends Component {
  render() {
    return(
      <section className="projects-container">
        {/* <Navigator /> */}
        <div>
          <h1>Projects</h1>
          <div className="projects-wrapper">
            {data.projects.map(project => (
              <Link key={project.id} className="project" to={`/projects/${project.link}`}>
                <h2 className="project-name">{project.name}</h2>
                <div className="project-overview-wrapper">
                <ul className="project-overview" style={project.styles}>
                    {project.skills.map((skill, key) => {
                      return (
                        <li className="project-skill" key={key}>{skill}</li>
                      );
                    })}
                  </ul>
                  <img src={project.image} className="project-image" alt="project" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer/>
      </section>
    )
  }
}

export default Projects;