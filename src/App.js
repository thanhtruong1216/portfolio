import React, { Component } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import News from './components/News';
import RecruitmentInfo from './components/RecruitmentInfo';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <News />
        <RecruitmentInfo />
        <Footer />
      </div>
    );
  }
}

export default App;
