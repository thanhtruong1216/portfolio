import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

class Navigation extends Component {
  render() {
    return(
      <ul className="navigation-bar-container">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <span>Tin tức</span>
          <div className="news-dropdown-content">
            <Link to="/soonerNews">Tin mới</Link>
            <Link to="/productInfo">Thông tin sản phẩm</Link>
            <Link to="/careerTips">Cẩm nang nghề nghiệp</Link>
          </div>
        </li>
        <li>
          <Link to="/introduction">Giới thiệu</Link>
        </li>
        <li>
          <span>Tuyển dụng</span>
          <div className="recruitment-dropdown-content">
            <Link to="/recruitment">Thông tin tuyển dụng</Link>
            <Link to="/downloadForm">Download biểu mẫu</Link>
            <Link to="/applyForm">Nộp đơn ứng tuyển</Link>
          </div>
        </li>
        <li>
          <Link to="/contact">Liên hệ</Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;