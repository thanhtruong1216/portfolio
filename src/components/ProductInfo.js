import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/ProductInfo.css';

class ProductInfo extends Component {
  render() {
    return(
      <section className="product-info-container">
        <Header />
        <div className="products-wrapper">
          I'am product infomation
        </div>
        <Footer />
      </section>
    );
  }
}

export default ProductInfo;