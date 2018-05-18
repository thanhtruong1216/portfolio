import React, { Component } from 'react';
import '../styles/ReactFeature.css';
import Header from './Header';
import Footer from './Footer';

class ReactFeature extends Component {
  render() {
    return(
      <section className="react-feature-container">
        <h1>react</h1>
        <p>This is my react feature work</p>
      </section>
    );
  }
}

export default ReactFeature;