import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Neighborhoodmap extends Component {
  render() {
    return(
      <section className="project-details-container">
        <article>
          <h1>Project Neighborhoodmap description</h1>
          <p>
            Project goal: Develop a single page application featuring a map of my neighborhood I would like to visit.
            Add functionality to the map, including highlighted locations, provide a filter option that uses an input
            field to filter both the list view and the map markers displayed by default on load, using FourSquare APIs
            to provide information when a map marker or list view entry is clicked.
          </p>
          <p>
            Project prerequisite: I need to know about Google map with Javascript before to build React map application.
            Besides that, I also have a knowledge about React and the relation between Javascipt with React.
          </p>
        </article>
        <a href="https://reactmapofthanh.herokuapp.com/">See project on Heroku</a>
        <a href="https://github.com/thanhtruong1216/react-map/">See project on Github</a>
      </section>
    );
  }
}

export default Neighborhoodmap;