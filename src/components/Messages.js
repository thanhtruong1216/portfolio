import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Messages.sass';

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/messages.json')
    .then(response => {
        console.log("Response", response)
        this.setState({
          messages: response.data
        })
    })
    .catch(error => console.log(error))
  }

  render() {
    const { messages } = this.state;
    return(
      <section className="messages page-container">
        {messages.map((message) => {
          return(
            <article key={message.id} className="messages__message">
              <p>ID: {message.id}</p>
              <p>CONTENT: {message.content}</p>
            </article>
          )
        })}
      </section>
    )
  }
}

export default Messages;