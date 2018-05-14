import React, { Component } from 'react';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import News from './Components/News';
import RecruitmentInfo from './Components/RecruitmentInfo';
import Footer from './Components/Footer';
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
