import React from 'react'
import classes from './counseling.module.scss';
import Subclasses from '../Service.module.scss';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
function counseling() {
  return (
    <div>
      <Header />
      <section className="container">
        <div className={Subclasses.title}>
          <h2>고객센터</h2>
        </div>
        <div className={Subclasses.LinkSwap}>
          <ul className={Subclasses.LinkBtn}>
            <li className={Subclasses.Clicked}><a href="/counseling">문의하기</a></li>
            <li><a href="/individual">개인정보 처리방침</a></li>
            <li><a href="/stipulation">서비스 이용약관</a></li>
          </ul>
        </div>
        <div className={`${classes.emailText} ${Subclasses.Desc_wrap}`}>
          <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=influde.master@gmail.com" target="_blank">influde.master@gmail.com</a>
          <span>으로 문의 내용을 보내주시면 빠른 검토 후 연락을 드리도록 하겠습니다</span>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default counseling