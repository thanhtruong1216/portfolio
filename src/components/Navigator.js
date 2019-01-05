import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigator.sass';
class Navigator extends Component {
  render() {
    return (
      <div className="navigator">
        <Link to="/home">Home</Link>
        <Link to="/about-me">About me</Link>
        <Link to="/projects">Projects</Link>
      </div>
    );
  }
}

export default Navigator;