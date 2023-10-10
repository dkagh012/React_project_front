import React, { useState } from "react";
import classes from "./Login.module.scss";
import Logo from "../../../assets/image/logo.png";
import { IoClose } from "react-icons/io5";
import LoginForm from "./LoginForm/LoginForm";
import JoinForm from "./JoinForm/JoinForm";
import JoinEmail from "./JoinForm/JoinEmail/JoinEmail";
import JoinFinish from "./JoinForm/JoinFinish/JoinFinish";
import "./LoginBox.scss";
import { useDispatch, useSelector } from 'react-redux';
function Login({ onClose }) {
  const [activeForm, setActiveForm] = useState("loginForm");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const users = useSelector((state) => state.auth.users); // Redux 스토어에서 사용자 데이터 가져오기
  const dispatch = useDispatch();

  const handleLogin = (enteredEmail, enteredPassword) => {
    const user = users.find(
      (user) => user.username === enteredEmail && user.password === enteredPassword
    );
    if (user) {
      console.log("로그인 성공!");
      onClose(false)
      dispatch({ type: 'LOGIN', payload: user }); // Redux 스토어 업데이트
    } else {
      alert("로그인 실패: 유효하지 않은 사용자 이름 또는 비밀번호입니다.");
    }
  };

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isPasswordMatch = () => {
    return password === passwordCheck;
  };

  const changeForm = (formName) => {
    setActiveForm(formName);
    setPassword("");
    setPasswordCheck("");
    setEmail("");
    setIsEmailValid(true);
  };

  return (
    <div>
      <div className={classes.loginBox}>
        <div className={classes.loginBoxClose}>
          <button type="button" onClick={onClose}>
            <IoClose />
          </button>
        </div>
        {activeForm !== "JoinEmail" && activeForm !== "JoinFinish" && (
          <div className={classes.loginBoxLogo}>
            <img src={Logo} alt="로고"></img>
          </div>
        )}
        {activeForm === "loginForm" && (
          <LoginForm
            onChange={changeForm}
            email={email}
            updateEmail={updateEmail}
            isEmailValid={isEmailValid}
            handleLogin={handleLogin} // handleLogin 함수를 LoginForm 컴포넌트로 전달
          />
        )}
        {activeForm === "joinForm" && (
          <JoinForm
            onChange={changeForm}
            email={email}
            updateEmail={updateEmail}
            isEmailValid={isEmailValid}
            password={password}
            setPassword={setPassword}
            passwordCheck={passwordCheck}
            setPasswordCheck={setPasswordCheck}
            isPasswordMatch={isPasswordMatch}
          />
        )}
        {activeForm === "JoinEmail" && <JoinEmail onChange={changeForm} />}
        {activeForm === "JoinFinish" && <JoinFinish onChange={changeForm} />}
      </div>
      <div onClick={onClose} className={classes.loginBoxBackground}></div>
    </div>
  );
}

export default Login;
