import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class BookTracking extends Component {
  render() {
    return(
      <section className="project-details-container">
        <article>
          <h1>Project The book tracking app description</h1>
          <p>
          In the MyReads project, I created a bookshelf app that allows me to select and categorize books you have read,
          are currently reading, or want to read.
          The project emphasizes using React to build the application and provides an API server and client library that I
          used to persist information as I interacted with the application.
          </p>
        </article>
        <a href="https://github.com/thanhtruong1216/booksApp">See project on Github</a>
      </section>
    );
  }
}

export default BookTracking;