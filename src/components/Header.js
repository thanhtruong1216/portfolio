import React, { Component } from 'react';
import '../styles/Header.sass';
class Header extends Component {
  render() {
    return(
      <header className="header">
        <img className="header__avatar" src={this.props.avatar} alt="avatar" />
        <div className="header__name">
          <p>{this.props.name}</p>
        </div>
      </header>
    );
  }
}

export default Header;