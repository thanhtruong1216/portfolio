import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RecruitmentInfo.css'

class RecruitmentInfo extends Component {
  render() {
    return(
      <section className="recruitment-info-container">
        This is Recruitment Information
        <Link to="/recruitment">Show more</Link>
      </section>
    );
  }
}
export default RecruitmentInfo;