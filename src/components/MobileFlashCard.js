import React, { Component } from 'react';
import '../styles/Project.sass';
import data from './Data';

class MobileFlashCard extends Component {
  render() {
    const filterPrjoject = data.projects.filter(project => project.name === 'mobile flashcard');
    return(
      <section className="project-details-container">
         <h1>Project Mobile flashcard description</h1>
        {filterPrjoject.map(project => (
          <article>
            <div className="project-descripton">
              <h3>Overview</h3>
              <p>{project.description.overview}</p>
            </div>
            <div className="project-descripton">
              <h3>Technical used</h3>
              <ul>
              {project.description.technical.map(tech => (<li>{tech}</li>))}
              </ul>
            </div>
            <div className="project-descripton">
              <h3>Project goal</h3>
              <p>{project.description.goal}</p>
            </div>
            <a className="see-project-link" href="https://github.com/thanhtruong1216/thanhtruong-mobile-flashcard">See project on Github</a>
          </article>
        ))}
      </section>
    );
  }
}

export default MobileFlashCard;