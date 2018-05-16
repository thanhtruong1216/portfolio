import React, { Component } from 'react';
import '../styles/ApplyForm.css';
import Header from './Header';
import Footer from './Footer';

class ApplyForm extends Component {
  render() {
    return(
      <section className="apply-form-container">
        <Header />
        <div className="form-wrapper">
          Let's apply form here
        </div>
        <Footer />
      </section>
    );
  }
}

export default ApplyForm;