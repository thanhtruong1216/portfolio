import React, { Component } from 'react';
import '../styles/ApplyForm.css';
import Header from './Header';
import Footer from './Footer';

class ApplyForm extends Component {
  render() {
    return(
      <section className="apply-form-container">
        <Header />
        <div className="form-wrapper">
          <div className="application-imformation">
            <h1>Thong tin ung tuyen</h1>
            <form>
              <div>
                <label>Vi tri ung tuyen</label>
                <select>
                  <option>Vi tri 1</option>
                  <option>Vi tri 2</option>
                  <option>Vi tri 3</option>
                  <option>Vi tri 4</option>
                  <option>Vi tri 5</option>
                </select>
              </div>
              <div>
                <label>Nguyen vong lam tai</label>
                <select>
                  <option>Tinh Thanh</option>
                </select>
                <select>
                  <option>Quan huyen</option>
                </select>
              </div>
            </form>
          </div>

          <div className="personal-imformation">
            <h1>Thong tin ca nhan</h1>
            <form className="form-wrapper">
              <div>
                <div className="candidate-name-wrapper">
                  <label>Ho va ten ung vien</label>
                  <input type="text" placeholder="Vui long go chu in hoa co dau" />
                </div>
                <div className="candidate-sex-wrapper">
                  <label>Gioi tinh</label>
                  <label for="sex-male">Nam</label>
                  <input type="radio" name="sex" value="Nam" id="sex-male"/>
                  <label for="sex-female">Nu</label>
                  <input type="radio" name="sex" value="Nam" id="sex-female"/>
                </div>
              </div>
            </form>
          </div>

          <div>
            <h1>Trinh do hoc van</h1>
            <form>
            </form>
          </div>

          <div>
            <h1>Qua trinh lam viec</h1>
            <form>
            </form>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default ApplyForm;