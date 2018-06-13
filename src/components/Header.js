import React, { Component } from 'react';
import '../styles/Header.css';
import mepic from '../images/mepic.jpg';

class Header extends Component {
  render() {
    return(
      <header className="header-container">
        <img className="logo" src={mepic} alt="udacity-logo" />
        <p className="name">truong thi ho thanh</p>
        <p className="slogan">front-end developer</p>
        <em>Ho Chi Minh City, Viet Nam</em>
      </header>
    );
  }
}

export default Header;