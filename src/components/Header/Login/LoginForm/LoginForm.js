import React, { useState } from "react";
import classes from "./LoginForm.module.css";
import Button from "../../../UI/Button/Button";

function LoginForm(props) {
  const { email, updateEmail, isEmailValid, handleLogin } = props;

  // 비밀번호 입력값을 상태로 관리합니다.
  const [enteredPassword, setEnteredPassword] = useState("");

  // 비밀번호 입력값이 변경될 때 호출되는 함수
  const handlePasswordChange = (e) => {
    setEnteredPassword(e.target.value);
  };

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // 입력한 이메일과 비밀번호를 로그인 함수로 전달
    handleLogin(email, enteredPassword);
  };

  return (
    <div className={classes.loginBoxForm}>
      <form onSubmit={handleLoginFormSubmit}>
        <div className={classes.loginBoxInput}>
          <div>
            <input
              type="text"
              value={email}
              required
              placeholder="이메일 입력"
              id="email"
              onChange={(e) => updateEmail(e.target.value)}
            ></input>
            {!isEmailValid && (
              <span className="Check">이메일 형식이 맞지 않습니다.</span>
            )}
            <input
              type="password"
              value={enteredPassword} // 상태로 관리된 비밀번호 입력값 사용
              required
              placeholder="비밀번호 입력"
              onChange={handlePasswordChange} // 비밀번호 변경 이벤트 핸들러
            ></input>
          </div>
          <Button type="submit">로그인</Button>
        </div>
      </form>
      <ul className={classes.loginBoxList}>
        <li>
          <button type="button">이메일 찾기</button>
        </li>
        <li>
          <button type="button">비밀번호 찾기</button>
        </li>
        <li>
          <button type="button" onClick={() => props.onChange("JoinPopup")}>
            회원가입
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LoginForm;
