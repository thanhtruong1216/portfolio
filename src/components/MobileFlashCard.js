import React, { Component } from 'react';
import '../styles/Project.css';

class MobileFlashCard extends Component {
  render() {
    return(
      <section className="project-details-container">
        <article>
          <h1>Project Mobile Flashcards description</h1>
          <div className="project-descripton">
            <h3>Overview</h3>
            <p>For the UdaciCards project, I built a mobile application (Android or iOS - or both)
            that allows users to study collections of flashcards.</p>
          </div>
          <div className="project-descripton">
            <h3>Technical used</h3>
            <ul></ul>
          </div>
          <div className="project-descripton">
           <h3>Project goal</h3>
           <p>The app will allow users to create different categories of flashcards called "decks",
            add flashcards to those decks, then take quizzes on those decks. This project encompasses the fundamental aspects of building a native application, including handling infinite lists, routing,
            and user input. By building this project, I gain an understanding of how to use React Native to build an iOS and Android application.</p>
          </div>
        </article>
        <a className="see-project-link" href="https://github.com/thanhtruong1216/thanhtruong-mobile-flashcard">See project on Github</a>
      </section>
    );
  }
}

export default MobileFlashCard;