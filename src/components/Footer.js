import React, { Component } from 'react';
import '../styles/Footer.css';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
  render() {
    return(
      <footer className="footer-container">
        <ul>
          <li>
            <a href="tel:+84918858240">
              <FontAwesome name="fas fa-phone-square" className="icon" />
            </a>
          </li>

          <li>
            <a href="mailto:thanhtruong1216@gmail.com">
              <FontAwesome name="fas fa-envelope-square" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/thanhtruong0312/">
              <FontAwesome name="fab fa-linkedin" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/thanhtruong1216">
              <FontAwesome name="fab fa-github-square" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/hthanh312">
              <FontAwesome name="fab fa-facebook-square" className="icon" />
            </a>
          </li>
        </ul>
        <div><small>&copy;coppyright by ThanhTruong</small></div>
      </footer>
    );
  }
}

export default Footer;