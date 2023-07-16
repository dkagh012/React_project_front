import React from 'react';
import classes from './Login.module.css'
import Logo from '../../../assets/image/logo.png';
import { IoClose } from "react-icons/io5";
// import LoginForm from "./LoginForm/LoginForm"
import JoinForm from "./JoinForm/JoinForm"
function Login({ onClose }) {
  return (
    <div>
      <div className={classes.loginBox}>
        <div className={classes.loginBoxClose}>  <button type="button" onClick={onClose}><IoClose /></button></div>
        <div className={classes.loginBoxLogo}>
          <img src={Logo}></img>
        </div>
        {/* <LoginForm /> */}
        <JoinForm />
      </div>
      <div onClick={onClose} className={classes.loginBoxBackground}></div>
    </div>
  )
}

export default Login;
