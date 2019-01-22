import React from 'react';

const MessageForm = ({onNewList = f => f}) => {
  let name;
  const submit = e => {
    e.preventDefault()
    onNewList(name.value)
    name.value = ''
    name.focus()
}

  return (
    <form onSubmit={submit}>
      <h3>Leave with a message</h3>
      <input ref={input => name = input}
              type="text"
              placeholder="Title..." required />
      <button>Send Message</button>
    </form>
  )
}

export default MessageForm;