import React, { useState } from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import classes from './Notifications.module.scss';
import { Link } from 'react-router-dom';
function Notifications() {
  const [emailNotification, setEmailNotification] = useState(true); // 초기값은 백엔드에서 가져올 수 있습니다.
  const [partnerRequestNotification, setPartnerRequestNotification] = useState(true); // For company partnership requests
  const [companyInquiryNotification, setCompanyInquiryNotification] = useState(true); // For company inquiries

  // 핸들러 함수
  const toggleEmailNotification = async () => {
    try {
      const newSetting = !emailNotification;
      setEmailNotification(newSetting);

      // API 요청을 보내 상태 변경을 백엔드에 반영
      // await axios.post('/api/notification-settings', { email: newSetting });

    } catch (error) {
      console.error('Error updating notification settings', error);
    }
  };
  const togglePartnerRequestNotification = async () => {
    try {
      const newSetting = !partnerRequestNotification;
      setPartnerRequestNotification(newSetting);

      // API 요청을 보내 상태 변경을 백엔드에 반영
      // await axios.post('/api/notification-settings', { email: newSetting });

    } catch (error) {
      console.error('Error updating notification settings', error);
    }
  };
  const toggleCompanyInquiryNotification = async () => {
    try {
      const newSetting = !companyInquiryNotification;
      setCompanyInquiryNotification(newSetting);

      // API 요청을 보내 상태 변경을 백엔드에 반영
      // await axios.post('/api/notification-settings', { email: newSetting });

    } catch (error) {
      console.error('Error updating notification settings', error);
    }
  };
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
                  <input type='text' value="마케팅 정보 수신" disabled />
                  <button type='button' onClick={toggleEmailNotification}> {emailNotification ? '수신 ON' : '수신 OFF'}</button>
                </div>
              </li>
              <li className={classes.InputBox}>
                <p>알림</p>
                <div className={classes.Input}>
                  <input type='text' value="업체 제휴 요청 알림" disabled />
                  <button type='button' onClick={togglePartnerRequestNotification}>
                    {partnerRequestNotification ? '수신 ON' : '수신 OFF'}
                  </button>
                </div>
                <div className={classes.Input}>
                  <input type='text' value="업체 조회,관심 정보 알림" disabled />
                  <button type='button' onClick={toggleCompanyInquiryNotification}>
                    {companyInquiryNotification ? '수신 ON' : '수신 OFF'}
                  </button>
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