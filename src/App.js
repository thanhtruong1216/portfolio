import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
