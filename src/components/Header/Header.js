import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import Login from './Login/Login'
import Logo from '../../assets/image/logo.png';

function Header() {
  // const navigate = useNavigate();

  // const goToSearch = () => {
  //   navigate("/Search");
  // }

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <header className={classes.Header}>
      <div className={classes.HeaderList}>
        <div className={classes.Logo}>
          <img src={Logo} alt="Logo" />
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
        <div className={`${classes.HeaderLoginButton} ${classes.HeaderFontStyle}`}>
          <button type="button" onClick={handleLoginClick}>로그인/회원가입</button>
        </div>
      </div>
      {showLogin && <Login onClose={handleLoginClick} />}
    </header>
  );
}

export default Header;
