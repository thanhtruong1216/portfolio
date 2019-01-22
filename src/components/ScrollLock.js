import { Component } from 'react';
import '../styles/ScrollLock.sass';

class ScrollLock extends Component {
  componentDidMount() {
    document.querySelector(this.props.target).classList.add('no-scroll');
  }

  componentWillUnmount() {
    document.querySelector(this.props.target).classList.remove('no-scroll');
  }

  render() {
    return null;
  }
}

export default ScrollLock;