import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/NewsPage.css';

class NewsPage extends Component {
  render() {
    return(
      <section className="news-page-container">
        <Header />
        <div className="article-container">This is all articles</div>
        <Footer />
      </section>
    );
  }
}

export default NewsPage;