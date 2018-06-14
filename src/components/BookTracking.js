import React, { Component } from 'react';
import '../styles/Project.css';
import data from './Data';

class BookTracking extends Component {
  render() {
    return(
      <section className="project-details-container">
        <article>
          <h1>Project The book tracking description</h1>
          <div className="project-descripton">
            <h3>Overview</h3>
            <p>In this project, I created a bookshelf app that allows me to select and categorize books you have read,
              are currently reading, or want to read.</p>
          </div>
          <div className="project-descripton">
            <h3>Technical used:</h3>
            <ul>
              <li>React</li>
              <li>Babel</li>
              <li>Webpack</li>
              <li>Html</li>
              <li>Css</li>
            </ul>
          </div>
          <div className="project-descripton">
            <h3>Project goal</h3>
            <p>
              The project emphasizes using React to build the application and provides an API server and client library that I
              used to persist information as I interacted with the application.
            </p>
          </div>
        </article>
        <a className="see-project-link" href="https://github.com/thanhtruong1216/booksApp">See project on Github</a>
      </section>
    );
  }
}

export default BookTracking;