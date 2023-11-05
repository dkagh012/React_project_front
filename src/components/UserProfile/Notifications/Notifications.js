import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import classes from './Notifications.module.scss';
import { Link } from 'react-router-dom';
function Notifications() {
  return (
    <div>
      <Header />
      <section className='container'>
        <div className={classes.UserProfile}>
          <div className={classes.UserProfile_Tab}>
            <ul>
              <li><Link to="/Settings"><span>계정 설정</span></Link></li>
              <li className={classes.Clicked}><Link to="/Notifications"><span>알림 설정</span></Link></li>
            </ul>
          </div>
          <div className={classes.UserProfile_Desc}>
            <ul>
              <li className={classes.Title}><h4>알림 설정</h4></li>
              <li className={classes.InputBox}>
                <p>정보성 이메일</p>
                <div className={classes.Input}>
                  <input type='text' value="마케팅 정보 수신" disabled="true" />
                  <button type='button'>수신 ON</button>
                </div>
              </li>
              <li className={classes.InputBox}>
                <p>알림</p>
                <div className={classes.Input}>
                  <input type='text' value="업체 제휴 요청 알림" disabled="true" />
                  <button type='button'>수신 ON</button>
                </div>
                <div className={classes.Input}>
                  <input type='text' value="업체 조회,관심 정보 알림" disabled="true" />
                  <button type='button'>수신 ON</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Notifications