import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import Login from './Login/Login'
import Notice from './Notice/Notice'
import Logo from '../../assets/image/logo.png';
import UserIcon from '../../assets/image/companyImg.png';
import MessagesIcon from '../../assets/image/messages-2.svg';
import { FaRegBell } from "react-icons/fa";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const handleAlarmClick = () => {
    setShowNotice(!showNotice);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // 로그인 버튼 클릭 시 로그인 상태를 true로 변경
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className={classes.Header}>
      <div className={classes.HeaderList}>
        <div className={classes.Logo}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={classes.HeaderMenuList}>
          <ul className={`${classes.HeaderMenuLinkList} ${classes.HeaderFontStyle}`}>
            <li>
              <Link to="/Search">업체 검색</Link>
            </li>
            <li>
              <Link to="/View">업체 등록</Link>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <div className={`${classes.HeaderLoginButton} ${classes.HeaderFontStyle}`}>
            <button type="button" className={classes.chat} onClick={handleAlarmClick}><img src={MessagesIcon} alt="MessagesIcon"></img></button>
            <button type="button" className={classes.notice}><FaRegBell /></button>
            <button type="button" className={classes.UserIcon} onClick={() => setIsLoggedIn(false)}>
              <img src={UserIcon} alt="UserIcon" />
            </button>
            {showNotice && <Notice onClose={handleAlarmClick} />}
          </div>
        ) : (
          <div className={`${classes.HeaderLoginButton} ${classes.HeaderFontStyle}`}>
            <button className={classes.LoginBtn} type="button" onClick={handleLoginClick}>로그인/회원가입</button>
          </div>
        )}
      </div>
      {showLogin && <Login onClose={handleLoginClick} onLogin={handleLogin} onLogout={handleLogout} />}
    </header>
  );
}

export default Header;
