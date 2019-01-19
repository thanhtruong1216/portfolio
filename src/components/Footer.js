import React, { Component } from 'react';
import '../styles/Footer.sass';
import FontAwesome from 'react-fontawesome';
import data from './Data';

class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <ul className="footer-icons">
          {data.contact.map((contacInfo, index) => (
            <li key={index}>
              <a href={contacInfo.link}>
                <FontAwesome name={contacInfo.icon} className="icon" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    );
  }
}

export default Footer;