import React, { Component } from 'react';
import '../styles/Header.css';
import mepic from '../images/mepic.jpg';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <header className="header-container">
        <img className="avatar" src={mepic} alt="udacity-logo" />
        <p className="name">truong thi ho thanh</p>
        <p className="slogan">front-end developer</p>
        <Link to="overview/thanh-location" className="white-text">
          <FontAwesome name="fas fa-map-marker" className="icon white-icon"/>See my location
        </Link>
      </header>
    );
  }
}

export default Header;