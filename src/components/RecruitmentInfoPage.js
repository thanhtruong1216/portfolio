import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/RecruitmentInfoPage.css';

class RecruitmentInfoPage extends Component {
  render() {
    return(
      <section className="recruitment-page-container">
        <Header />
        <div class="recruitments">
          This is main content of recruitment
        </div>
        <Footer />
      </section>
    );
  }
}
export default RecruitmentInfoPage