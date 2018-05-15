import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/DownloadForm.css'

class DownloadForm extends Component {
  render() {
    return(
      <section className="download-forms-container">
        <Header />
        <div className="forms-wrapper">
          We are forms
        </div>
        <Footer />
      </section>
    );
  }
}

export default DownloadForm;