import React, { Component } from 'react';
import Header from './Header';
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return(
      <section className="contact-container">
        <Header />
        This is our contact
      </section>
    );
  }
}

export default Contact;