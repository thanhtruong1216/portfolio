import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './App.sass';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/about-me">About me</Link>
        <Link to="/projects">Projects</Link>
      </div>
    );
  }
}

export default App;
