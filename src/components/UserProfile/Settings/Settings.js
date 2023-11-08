import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import classes from './Settings.module.scss';
import { Link } from 'react-router-dom';
import PhoneAction from './PhoneAction/PhoneAction';
import EmailAction from './EmailAction/EmailAction';
import PasswordAction from './PasswordAction/PasswordAction';

function Settings() {
  const [ShowPhoneAction, setShowPhoneAction] = useState(false);
  const [ShowEmailAction, setShowEmailAction] = useState(false);
  const [ShowPasswordAction, setShowPasswordAction] = useState(false);
  const [phoneValue, setPhoneValue] = useState(''); // Initialize the phoneValue state
  const [emailValue, setEmailValue] = useState(''); // Initialize the phoneValue state
  const [passwordValue, setPasswordValue] = useState(''); // Initialize the phoneValue state

  const handleShowPasswordAction = () => {
    setShowPasswordAction(true);
  }

  const handleClosePasswordAction = () => {
    setShowPasswordAction(false);
  }
  const handleShowPhoneAction = () => {
    setShowPhoneAction(true);
  }

  const handleClosePhoneAction = () => {
    setShowPhoneAction(false);
  }
  const handleShowEmailAction = () => {
    setShowEmailAction(true);
  }

  const handleCloseEmailAction = () => {
    setShowEmailAction(false);
  }

  return (
    <div>
      <Header />
      <section className='container'>

        {ShowPasswordAction &&
          <PasswordAction
            showClose={handleClosePasswordAction}
            setEmailValue={setPasswordValue}
          />
        }
        {console.log(ShowEmailAction)}
        {ShowEmailAction &&
          <EmailAction
            showClose={handleCloseEmailAction}
            setEmailValue={setEmailValue}
          />
        }

        {ShowPhoneAction && (
          <PhoneAction
            showClose={handleClosePhoneAction}
            setPhoneValue={setPhoneValue}
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
                  <input
                    type='text'
                    placeholder='미설정'
                    disabled
                    value={phoneValue}
                  />
                  <button type='button' onClick={handleShowPhoneAction}>변경</button>
                </div>
              </li>
              <li className={classes.InputBox}>
                <p>이메일</p>
                <div className={classes.Input}>
                  <input type='email' placeholder='미설정' disabled value={emailValue} />
                  <button type='button' onClick={handleShowEmailAction}>변경</button>
                </div>
              </li>
              <li className={classes.InputBox}>
                <p>비밀번호</p>
                <div className={classes.Input}>
                  <input type='password' placeholder='미설정' disabled value={passwordValue} />
                  <button type='button' onClick={handleShowPasswordAction}>변경</button>
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
