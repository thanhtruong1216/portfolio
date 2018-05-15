import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

class Navigation extends Component {
  render() {
    return(
      <ul className="navigation-bar-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <span>News</span>
          <div className="news-dropdown-content">
            <Link to="/soonerNews">News Update</Link>
            <Link to="/productInfo">Product Imformation</Link>
            <Link to="/careerTips">Career Tips</Link>
          </div>
        </li>
        <li>
          <Link to="/introduction">Introduction</Link>
        </li>
        <li>
          <span>Recruitment</span>
          <div className="recruitment-dropdown-content">
            <Link to="/recruitment">Recruitment Imformation</Link>
            <Link to="/downloadForm">Download Form</Link>
            <Link to="/applyForm">Apply Form</Link>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;