import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import Header from './components/Header';
import './App.sass';
import Heart from './components/Heart';
import './styles/Variables.sass';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import data from './components/Data';
import MessageForm from './components/MessageForm';
class App extends Component {

  // addNewList(name) {
  //   axios.post('http://localhost:3000/messages/', { message: {name} })
  //   .then(response => {
  //       console.log(response)
  //       const messages = [ ...this.state.messages, response.data ]
  //       this.setState({messages})
  //   })
  //   .catch(error => {
  //       console.log(error)
  //   })
  // }

  // handleNewUserMessage = (content) => {
  //   const config = {
  //     headers: {'Access-Control-Allow-Origin': '*'}
  //   }
  //   console.log('sss', content)
  //   axios.post('http://localhost:3000/messages/', { message: {content} }, config)
  //   .then(response => {
  //       console.log(response)
  //       const messages = [ ...this.state.messages, response.data ]
  //       this.setState({messages})
  //   })
  //   .catch(error => {
  //       console.log(error)
  //   })
  // }

  render() {
    return (
      <section className="App">
        <Header name="Thanh Truong" avatar={data.introduction.avatar} />
        <div className="navgation-links">
          <NavLink activeClassName="active-nav" to="/about-me">About me</NavLink>
          <NavLink activeClassName="active-nav" to="/projects">Projects</NavLink>
          <NavLink activeClassName="active-nav" to="/thanh-locations">Thanh's locations</NavLink>
        </div>
        {/* <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={avatar}
          title="Welcome to Thanh's house"
          subtitle="Leave with a message and contact info">
          </Widget> */}
        <Heart />
      </section>
    );
  }
}

export default App;
