import React, { Component } from 'react';
class MemoryGame extends Component {
  render() {
    return(
      <section className="project-details-container">
        <article>
          <h1>Project MemoryGame Description</h1>
          <p>
          The Memory Game Project is all about demonstrating your mastery of HTML, CSS, and JavaScript.
          I built a complete browser-based card matching game (also known as Concentration).
          But this isn’t just any memory game! It’s a shnazzy, well-designed, feature-packed memory game!
          </p>
          <p>
          The game board consists of sixteen "cards" arranged in a grid.
          The deck is made up of eight different pairs of cards, each with different symbols on one side.
          The cards are arranged randomly on the grid with the symbol face down.
          The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!
          </p>
        </article>
        <a href="https://memorygameofthanh.herokuapp.com/">See project on Heroku</a>
        <a href="https://github.com/thanhtruong1216/memory-game">See project on Github</a>
      </section>
    );
  }
}

export default MemoryGame;