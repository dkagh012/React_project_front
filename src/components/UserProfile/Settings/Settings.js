import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import classes from './Settings.module.scss';
import { Link } from 'react-router-dom';
import PhoneAction from './PhoneAction/PhoneAction';

function Settings() {
  const [ShowPhoneAction, setShowPhoneAction] = useState(false);
  const [phoneValue, setPhoneValue] = useState(''); // Initialize the phoneValue state

  const handleShowPhoneAction = () => {
    setShowPhoneAction(true);
  }

  const handleClosePhoneAction = () => {
    setShowPhoneAction(false);
  }

  return (
    <div>
      <Header />
      <section className='container'>
        {ShowPhoneAction && (
          <PhoneAction
            showClose={handleClosePhoneAction}
            setPhoneValue={setPhoneValue} // Pass the setPhoneValue function
          />
        )}
        <div className={classes.UserProfile}>
          <div className={classes.UserProfile_Tab}>
            <ul>
              <li className={classes.Clicked}><Link to="/Settings"><span>계정 설정</span></Link></li>
              <li><Link to="/Notifications"><span>알림 설정</span></Link></li>
            </ul>
          </div>
          <div className={classes.UserProfile_Desc}>
            <ul>
              <li className={classes.Title}><h4>계정 설정</h4></li>
              <li className={classes.InputBox}>
                <p>이름</p>
                <div className={classes.Input}>
                  <input type='text' placeholder='미설정' disabled />
                </div>
              </li>
              <li className={classes.InputBox}>
                <p>휴대폰 번호</p>
                <div className={classes.Input}>
                  {console.log(phoneValue)}
                  <input
                    type='number'
                    placeholder='미설정'
                    disabled
                    value={phoneValue} // Set the value using the phoneValue state
                  />
                  <button type='button' onClick={handleShowPhoneAction}>변경</button>
                </div>
              </li>
              <li className={classes.InputBox}>
                <p>이메일</p>
                <div className={classes.Input}>
                  <input type='email' placeholder='미설정' disabled />
                  <button type='button'>변경</button>
                </div>
              </li>
              <li className={classes.InputBox}>
                <p>비밀번호</p>
                <div className={classes.Input}>
                  <input type='password' placeholder='미설정' disabled />
                  <button type='button'>변경</button>
                </div>
              </li>
              <li className={classes.InputBox}>
                <p>회원탈퇴</p>
                <div className={classes.Input}>
                  <input type='text' disabled placeholder='탈퇴 후 모든 데이터가 삭제되며 복구할 수 없습니다' />
                  <button type='button'>회원 탈퇴 신청</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Settings;
