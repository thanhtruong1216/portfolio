import React, { Component } from 'react';
import '../styles/Header.css';
import logo from '../Images/logo.jpeg';

class Header extends Component {
  render() {
    return(
      <header class="header-container">
        <img class="logo" src={logo} alt="udacity-logo" />
        <div class="header-right-content">
          <p class="name">thanh truong</p>
          <p class="slogan">front-end developer</p>
        </div>
      </header>
    );
  }
}

export default Header;