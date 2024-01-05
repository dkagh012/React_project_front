import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import Login from "./Login/Login";
import Profile from "./Popup/Profile/profile";
import Notice from "./Popup/Notice/Notice";
import Logo from "../../assets/image/logo.png";
import UserIcon from "../../assets/image/companyImg.png";
import MessagesIcon from "../../assets/image/messages-2.svg";
import { FaRegBell } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  showLoginAction,
  hideLoginAction,
} from "../../store/reducers/LoginAction/actions";
function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const showLogin = useSelector((state) => state.loginReducer.showLogin);
  const dispatch = useDispatch();
  const [showNotice, setShowNotice] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);
  const noticeRef = useRef(null);

  const handleLoginClick = () => {
    dispatch(showLoginAction());
  };
  const handleCloseLogin = () => {
    dispatch(hideLoginAction());
  };
  const handleAlarmClick = () => {
    setShowNotice(!showNotice);
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (noticeRef.current && !noticeRef.current.contains(event.target)) {
        setShowNotice(false);
      }
    }

    if (showNotice) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showNotice]);

  return (
    <header className={classes.Header}>
      <div className={classes.HeaderList}>
        <div className={classes.Logo}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={classes.HeaderMenuList}>
          <ul
            className={`${classes.HeaderMenuLinkList} ${classes.HeaderFontStyle}`}
          >
            <li>
              <Link to="/Search">업체 검색</Link>
            </li>
            <li>
              <Link to="/View">업체 등록</Link>
            </li>
          </ul>
        </div>

        {isLoggedIn ? (
          <div
            className={`${classes.HeaderLoginButton} ${classes.HeaderFontStyle}`}
          >
            <button type="button" className={classes.chat}>
              <img src={MessagesIcon} alt="MessagesIcon"></img>
            </button>
            <button
              type="button"
              className={classes.notice}
              onClick={handleAlarmClick}
              ref={noticeRef}
            >
              <FaRegBell />
            </button>
            <button
              type="button"
              className={classes.UserIcon}
              onClick={handleProfileClick}
              ref={profileRef}
            >
              <img src={UserIcon} alt="UserIcon" />
            </button>
            {showProfile && <Profile LogOut={handleLogout} />}
            {showNotice && <Notice />}
          </div>
        ) : (
          <div
            className={`${classes.HeaderLoginButton} ${classes.HeaderFontStyle}`}
          >
            <button
              className={classes.LoginBtn}
              type="button"
              onClick={handleLoginClick}
            >
              로그인/회원가입
            </button>
          </div>
        )}
      </div>
      {showLogin && <Login onClose={handleCloseLogin} />}
    </header>
  );
}

export default Header;
