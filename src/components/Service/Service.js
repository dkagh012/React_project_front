import React from 'react'
import classes from './Service.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
function Service() {
  return (
    <div>
      <Header />
      <section className="container">
        <div className={classes.title}>
          <h2>고객센터</h2>
        </div>
        <div className={classes.LinkSwap}>
          <ul>
            <li><button type="button" className={classes.Clicked}>문의하기</button></li>
            <li><button type="button">개인정보 처리방침</button></li>
            <li><button type="button">서비스 이용약관</button></li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Service