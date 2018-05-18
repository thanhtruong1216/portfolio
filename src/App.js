import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactFeature from './components/ReactFeature';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <h1>feature works</h1>
          <Link to="/react">React</Link>
          <Link to="/redux">Redux</Link>
          <Link to="/react-native">React</Link>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
