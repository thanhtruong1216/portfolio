import React, { Component } from 'react';
import Carousel from './Carousel';
import '../styles/Features.sass';
import data from './Data';

const projecrUrls = data.projects.map((project) => {
  return project.carouselImage
})
const links = data.projects.map((project) => {
  return project.link
})
class Features extends Component {
  render() {
    return(
      <section className="features">
        <h1>Features</h1>
        <Carousel imageUrls={projecrUrls} links={links} />
      </section>
    );
  }
}

export default Features;