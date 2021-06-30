import React, { Component } from 'react'
import '../styles/Footer.sass'
import FontAwesome from 'react-fontawesome'
import data from '../data/Introduce'
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer__icons">
          {data.contact.map((contacInfo, index) => (
            <li key={index}>
              <a className="footer__link" href={contacInfo.link}>
                <FontAwesome name={contacInfo.icon} className="footer__icon" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }
}

export default Footer
