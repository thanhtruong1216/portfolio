import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'react-chat-widget/lib/styles.css'
import Header from './components/Header'
import './App.sass'
import Heart from './components/Heart'
import './styles/Variables.sass'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import data from './data/Introduce'
class App extends Component {
  render() {
    return (
      <section className="App">
        <Header name="Thanh Truong" avatar={data.introduction.avatar} />
        <div className="navgation-links">
          <NavLink activeClassName="active-nav" to="/about-me">
            About me
          </NavLink>
          <NavLink activeClassName="active-nav" to="/projects">
            Projects
          </NavLink>
          <NavLink activeClassName="active-nav" to="/thanh-locations">
            Thanh's locations
          </NavLink>
          <NavLink activeClassName="active-nav" to="/interview-questions">
            Interview Questions
          </NavLink>
        </div>
        <Heart />
      </section>
    )
  }
}

export default App
