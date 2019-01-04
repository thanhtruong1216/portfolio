import React, { Component } from 'react';
import '../styles/Contact.sass';
import FontAwesome from 'react-fontawesome';
import data from './Data';

class Contact extends Component {
  render() {
    return(
      <section>
        <ul className="contact-container">
          {data.contact.map((contacInfo, index) => (
            <li key={index}>
              <a href={contacInfo.link}>
                <FontAwesome name={contacInfo.icon} className="icon" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Contact;