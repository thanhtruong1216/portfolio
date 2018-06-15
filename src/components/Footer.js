import React, { Component } from 'react';
import '../styles/Footer.css';
import FontAwesome from 'react-fontawesome';
import data from './Data';

class Footer extends Component {
  render() {
    return(
      <footer className="footer-container">
        <ul>
          {data.contact.map(contacInfo => (
            <li>
              <a href={contacInfo.link}>
                <FontAwesome name={contacInfo.icon} className="icon" />
              </a>
            </li>
          ))}
        </ul>
        <div>
          <small>&copy;coppyright by ThanhTruong</small>
        </div>
      </footer>
    );
  }
}

export default Footer;