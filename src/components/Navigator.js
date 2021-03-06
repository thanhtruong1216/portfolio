import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigator.sass";
import ScrollLock from "./ScrollLock";
class Navigator extends Component {
  state = {
    showMenuState: false
  };

  toogleMenu = () => {
    this.setState({
      showMenuState: !this.state.showMenuState
    });
  };

  render() {
    if (!this.state.showMenuState) {
      return (
        <div className="navigator">
          <a href="#" className="button-nav" onClick={this.toogleMenu}>
            <div className="inner" />
          </a>
        </div>
      );
    } else {
      return (
        <div className="navigator navigator-active">
          <a
            href="#"
            className="button-nav button-close"
            onClick={this.toogleMenu}
          >
            <div className="inner" />
          </a>
          <ScrollLock target="body" />
          <div className="navgation-links">
            <NavLink
              onClick={this.toogleMenu}
              activeClassName="active-nav"
              to="/"
              exact
            >
              Home
            </NavLink>
            <NavLink
              onClick={this.toogleMenu}
              activeClassName="active-nav"
              to="/about-me"
            >
              About me
            </NavLink>
            <NavLink
              onClick={this.toogleMenu}
              activeClassName="active-nav"
              to="/projects"
            >
              Projects
            </NavLink>
            {/* <NavLink onClick={this.toogleMenu} activeClassName="active-nav" to="/features">Features</NavLink> */}
            <NavLink
              onClick={this.toogleMenu}
              activeClassName="active-nav"
              to="/thanh-locations"
            >
              Thanh's locations
            </NavLink>
            <NavLink
              onClick={this.toogleMenu}
              activeClassName="active-nav"
              to="/interview-questions"
            >
              Interview questions
            </NavLink>
          </div>
        </div>
      );
    }
  }
}

export default Navigator;
