import React, { Component } from 'react';
import '../styles/Header.sass';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import data from './Data';
class Header extends Component {
  render() {
    return(
      <header className="header-container">
        <img className="avatar" src={this.props.avatar} alt="avatar" />
        <div className="name">
          <p>{this.props.name}</p>
        </div>
      </header>
    );
  }
}

export default Header;