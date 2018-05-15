import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/SoonerNews.css'

class SoonerNews extends Component {
  render() {
    return(
      <div className="sooner-news-container">
        <Header />
        <div className="sooner-news-wrapper">
          <article>
            I am sooner news
          </article>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SoonerNews;
