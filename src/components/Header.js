import React, { Component } from 'react';
import '../styles/Header.sass';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import data from './Data';
import Footer from './Contact';

class Header extends Component {
  render() {
    return(
      <header className="header-container">
        <img className="avatar" src={data.introduction.avatar} alt="avatar" />
        <div className="name">
          <p>{data.introduction.name}</p>
          <p>
            <FontAwesome name="fas fa-map-marker" className="icon white-icon"/>
            {data.introduction.location}</p>
          <Footer/>
        </div>
        <div className="roles">
          <p>
            <FontAwesome name={data.introduction.icon} className="icon white-icon"/>
            {data.introduction.job}
          </p>
          <p>
            <FontAwesome name={data.introduction.icon} className="icon white-icon"/>
            {data.introduction.language}
          </p>
          <p>
            <FontAwesome name={data.introduction.icon} className="icon white-icon"/>
            Desired Roles: {data.introduction.desiredRole}
          </p>
          <Link to="/thanh-location" className="white-text">
          <FontAwesome name="fas fa-map-marker" className="icon white-icon"/>See Where I lived and I worked
        </Link>
        </div>
      </header>
    );
  }
}

export default Header;