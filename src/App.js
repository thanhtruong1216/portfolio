import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import './App.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Skills />
        <Education />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
