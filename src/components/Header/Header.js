import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import Login from './Login/Login'
import Notice from './Notice/Notice'
import Logo from '../../assets/image/logo.png';
import UserIcon from '../../assets/image/companyImg.png';
import { FaRegBell } from "react-icons/fa";
import { TbMessageCircle2 } from "react-icons/tb";
function Header() {

  const [showLogin, setShowLogin] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };
  const handleAlarmClick = () => {
    setShowNotice(!showNotice);
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
        {/* <div className={`${classes.HeaderLoginButton} ${classes.HeaderFontStyle}`}>
          <button className={classes.LoginBtn} type="button" onClick={handleLoginClick}>로그인/회원가입</button>
        </div> */}
        <div className={`${classes.HeaderLoginButton} ${classes.HeaderFontStyle}`}>
          <button type="button" className={classes.UserIcon}><TbMessageCircle2 /></button>
          <button type="button" className={classes.notice} onClick={handleAlarmClick}><FaRegBell /></button>
          <button type="button" className={classes.chat}><img src={UserIcon} alt="UserIcon" /></button>
          {showNotice && <Notice onClose={handleAlarmClick} />}
        </div>
        {/* <Notice /> */}
      </div>
      {showLogin && <Login onClose={handleLoginClick} />}
    </header>
  );
}

export default Header;
