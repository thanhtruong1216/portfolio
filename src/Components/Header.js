import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return(
      <section className="header-container">
        <div className="logo-wrapper">
          <img src="#" alt="interdist-logo" />
        </div>
        <nav className="navigation-bar">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/introduction">Introduction</Link>
          <Link to="/recruitment">Recruitment</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </section>
    );
  }
}
export default Header;