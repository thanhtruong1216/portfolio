import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Introduction.css';

class Introduction extends Component {
  render() {
    return(
      <section className="introduction-container">
        <Header />
        <div className="introduction-content">This is introduction about us</div>
        <Footer />
      </section>
    );
  }
}
export default Introduction;