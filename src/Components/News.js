import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/News.css';

class News extends Component {
  render() {
    return(
      <section className="news-container">
        This is news
        <Link to="/news">Show more</Link>
      </section>
    );
  }
}
export default News;

