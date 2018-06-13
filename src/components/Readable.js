import React, { Component } from 'react';

class Readable extends Component {
  render() {
    return(
      <section className="project-details-container">
        <article>
          <h1>Project Readable Description</h1>
          <p>
            For the Readable project, I built a content and comment web app. Users will be able to post content to predefined categories,
            comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.
          </p>
          <p>
            This content and comment structure is common across a large number of websites and applications, from news sites to blogs to aggregators like Hacker News and Reddit.
            By building this project, I gain an understanding of how Redux can function in a standard type of application.
          </p>
        </article>
        <a href="https://github.com/thanhtruong1216/readable">See project on Github</a>
      </section>
    );
  }
}

export default Readable;