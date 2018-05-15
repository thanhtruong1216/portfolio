import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/CareerTips.css';

class CareerTips extends Component {
  render() {
    return(
      <section className="career-tips-container">
        <Header/>
        <div className="career-tips-content">I'am career tips</div>
        <Footer />
      </section>
    );
  }
}

export default CareerTips;