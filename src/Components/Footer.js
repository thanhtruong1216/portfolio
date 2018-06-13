import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return(
      <footer className="footer-container">
        <div className="flex-box">
          <span>Mobile: 0918858240</span>
          <span>Email: thanhtruong1216@gmail.com</span>
        </div>
        <div className="flex-box">
          <a href="https://www.linkedin.com/in/thanhtruong0312/">Linkedin: https://www.linkedin.com/in/thanhtruong0312/</a>
          <a href="https://github.com/thanhtruong1216">Github: https://github.com/thanhtruong1216</a>
        </div>
      </footer>
    );
  }
}

export default Footer;