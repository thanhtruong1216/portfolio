import React, { Component } from 'react';
import '../styles/Project.css';
import data from './Data';

class BookTracking extends Component {
  render() {
    const filterPrjoject = data.projects.filter(project => project.name === 'book tracking app');
    return(
      <section className="project-details-container">
         <h1>Project The book tracking description</h1>
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
            <a className="see-project-link" href="https://github.com/thanhtruong1216/booksApp">See project on Github</a>
          </article>
        ))}
      </section>
    );
  }
}

export default BookTracking;