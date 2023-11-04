import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom"
import Logo from "../../assets/image/logo.png"
function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.footerDesc}>
          <div className={classes.footerLogo}>
            <img alt="로고" src={Logo}></img>
          </div>
          <ul className={classes.footerItems}>
            <li><Link to="/stipulation">서비스 이용약관</Link></li>
            <li><Link to="/individual">개인정보처리방침</Link></li>
            <li><Link to="#">결제/환불약관</Link></li>
            <li><Link to="/counseling">고객센터</Link></li>
          </ul>
        </div>
        <div className={classes.footerInfo}>
          <h1>Copyright 2023 (C) Solidarity. All Rights Reserved.</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer;