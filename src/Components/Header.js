import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return(
      <section className="header-container">
        <div className="logo-wrapper">
          <img src="#" alt="interdist-logo" />
        </div>
        <Navigation/>
      </section>
    );
  }
}
export default Header;