import React, { Component } from 'react'
import '../styles/Footer.sass'
import data from '../data/Introduce'
class Footer extends Component {
  render() {
    console.log('v', data.contact)
    return (
      <footer className="footer">
        <ul className="footer__icons">
          {data.contact.map((contacInfo, index) => (
            <li key={index}>
              <a className="footer__link" href={contacInfo.link}>
                <img className="footer__icon" src={contacInfo.icon} alt={contacInfo.fbIcon} />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }
}

export default Footer
