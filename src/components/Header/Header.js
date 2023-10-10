import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import Login from './Login/Login'
import Notice from './Notice/Notice'
import Logo from '../../assets/image/logo.png';
import UserIcon from '../../assets/image/companyImg.png';
import MessagesIcon from '../../assets/image/messages-2.svg';
import { FaRegBell } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Redux 스토어에서 isLoggedIn 가져오기
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const handleAlarmClick = () => {
    setShowNotice(!showNotice);
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' }); // 로그아웃 액션 디스패치
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
            <button type="button" className={classes.UserIcon} onClick={handleLogout}>
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
      {showLogin && <Login onClose={handleLoginClick} onLogout={handleLogout} />}
    </header>
  );
}

export default Header;
