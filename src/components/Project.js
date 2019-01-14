import React, { Component } from 'react';
import '../styles/Project.sass';
import data from './Data';
class Project extends Component {
  static defaultProps = {
    match: {},
  }

  render() {
    const { match } = this.props;
    let projectLink = null;
    const project = data.projects.find(project => project.link === match.params.project);

    if(!project) {
      return null;
    }

    if(project.urlHeroku !== '') {
      projectLink = (
        <div>
          <a className="see-project-link" href={project.urlGitHub}>See project on Github</a>
          <a className="see-project-link" href={project.urlHeroku}>See project on Heroku</a>
        </div>
      )
    } else {
      projectLink = (<a className="see-project-link" href={project.urlGitHub}>See project on Github</a>)
    }

    return(
      <section className="project-details-container">
        <h1>Project {project.name} tracking description</h1>
          <article>
            <div className="project-descripton">
              <h3>Overview</h3>
              <p>{project.description.overview}</p>
            </div>
            <div className="project-descripton">
              <h3>Technology</h3>
              <ul>
              {project.description.technical.map(tech => (<li>{tech}</li>))}
              </ul>
            </div>
            <div className="project-descripton">
              <h3>Project goal</h3>
              <p>{project.description.goal}</p>
            </div>
            {projectLink}
          </article>
      </section>
    );
  }
}

export default Project;