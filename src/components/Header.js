import React, { Component } from 'react';
import '../styles/Header.css';
import mepic from '../images/mepic.jpg';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import data from './Data';

class Header extends Component {
  render() {
    return(
      <header className="header-container">
        <img className="avatar" src={data.introduction.avatar} alt="avatar" />
        <div className="name">
          <p>{data.introduction.name}</p>
          <p className="slogan">{data.introduction.job}</p>
          <p>{data.introduction.language}</p>
        </div>
        <Link to="overview/thanh-location" className="white-text">
          <FontAwesome name="fas fa-map-marker" className="icon white-icon"/>See where I lived and I worked
        </Link>
      </header>
    );
  }
}

export default Header;