import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigator.sass';
import ScrollLock from './ScrollLock';
class Navigator extends Component {
  state = {
    showMenuState: false
  }

  toogleMenu = () => {
    this.setState({
      showMenuState: !this.state.showMenuState
    })
  }

  render() {
    if(!this.state.showMenuState) {
      return (
        <div className="navigator">
          <div className="three-lines" onClick={this.toogleMenu}>
            <div></div>
            <div className="second-line"></div>
            <div></div>
          </div>
        </div>
      );
    } else {
      return(
        <div className="navigator navigator-active">
          <ScrollLock target="body"/>
          <div className="x" onClick={this.toogleMenu}>
          </div>
          <div className="navgation-links">
            <Link to="/home">Home</Link>
            <Link to="/about-me">About me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/thanh-location">Thanh's location</Link>
          </div>
        </div>
      )
    }
  }
}

export default Navigator;