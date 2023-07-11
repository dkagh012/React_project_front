import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import classes from './Header.module.css';
import Logo from '../../assets/image/logo.png';
function Header() {
  return (
    <BrowserRouter >
      <header className={classes.Header}>
        <div className={classes.HeaderList}>
          <div className={classes.Logo}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={classes.HeaderMenuList}>
            <ul className={`${classes.HeaderMenuLinkList} ${classes.HeaderFontStyle}`}>
              <li>
                <Link to="/">업체 검색</Link>
              </li>
              <li>
                <Link to="/">업체 등록</Link>
              </li>
            </ul>
          </div>
          <div className={`${classes.HeaderLoginButton} ${classes.HeaderFontStyle}`}>
            <Link to="/">로그인/회원가입</Link>
          </div>

        </div>
      </header>
    </BrowserRouter>
  );
}

export default Header;
