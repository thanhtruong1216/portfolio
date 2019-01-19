import React, { Component } from 'react';
import '../styles/Projects.sass';
import '../App.sass';
import { Link } from 'react-router-dom';
import data from './Data';
import Footer from './Footer';
class Projects extends Component {
  render() {
    return(
      <section className="projects">
        {/* <Navigator /> */}
        <div>
          <h1>Projects</h1>
          <div className="projects__content">
            {data.projects.map(project => (
              <Link key={project.id} className="projects__project" to={`/projects/${project.link}`}>
                <h2 className="projects__project-name">{project.name}</h2>
                <div className="projects__overview-wrapper">
                <ul className="projects__project-overview" style={project.styles}>
                    {project.skills.map((skill, key) => {
                      return (
                        <li className="projects__project-skill" key={key}>{skill}</li>
                      );
                    })}
                  </ul>
                  <img src={project.image} className="projects__project-image" alt="project" />
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