import React, { useState } from "react";
import classes from "./Login.module.css";
import Logo from "../../../assets/image/logo.png";
import { IoClose } from "react-icons/io5";
import LoginForm from "./LoginForm/LoginForm";
import JoinForm from "./JoinForm/JoinForm";
import "./LoginBox.css";
function Login({ onClose }) {
  const [activeForm, setActiveForm] = useState("loginForm");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  // 이메일 업데이트 함수
  const updateEmail = (newEmail) => {
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  // 이메일 형식 검사 함수
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  return (
    <div>
      <div className={classes.loginBox}>
        <div className={classes.loginBoxClose}>
          <button type="button" onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className={classes.loginBoxLogo}>
          <img src={Logo}></img>
        </div>
        {activeForm === "loginForm" && (
          <LoginForm
            onChange={setActiveForm}
            email={email}
            updateEmail={updateEmail}
            isEmailValid={isEmailValid}
          />
        )}
        {activeForm === "joinForm" && (
          <JoinForm
            onChange={setActiveForm}
            email={email}
            updateEmail={updateEmail}
            isEmailValid={isEmailValid}
          />
        )}
      </div>
      <div onClick={onClose} className={classes.loginBoxBackground}></div>
    </div>
  );
}

export default Login;
