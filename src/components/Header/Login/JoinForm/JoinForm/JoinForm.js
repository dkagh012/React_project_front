import React, { useState } from "react";
import classes from "./JoinForm.module.scss";
import Button from "../../../../UI/Button/Button";

function JoinForm(props) {
  const {
    email,
    updateEmail,
    isEmailValid,
    isPasswordMatch,
    setPasswordCheck,
    password,
    setPassword,
    passwordCheck,
  } = props;

  const [name, setName] = useState("");

  const updateName = (name) => {
    setName(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("회원 가입이 완료되었습니다.");
        // 리다이렉트 또는 다른 처리
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={classes.JoinBox}>
      <form id="memberForm" onSubmit={handleSubmit}>
        {/* 각 필드에 대한 입력 요소 */}
        <div>
          <h1>이름을 입력해주세요</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => updateName(e.target.value)}
            required
            placeholder="이름 입력"
          ></input>
          {name.trim() === "" && (
            <span className="Check">이름을 입력해주세요</span>
          )}
        </div>
        <div>
          <h1>이메일을 입력해주세요</h1>
          <input
            type="text"
            value={email}
            required
            className={isEmailValid ? "" : classes.InputError}
            placeholder="이메일 입력"
            onChange={(e) => updateEmail(e.target.value)}
          ></input>
          {!isEmailValid && (
            <span className="Check">이메일 형식이 맞지 않습니다.</span>
          )}
        </div>
        <div>
          <h1>비밀번호를 입력해주세요</h1>
          <input
            type="password"
            placeholder="비밀번호"
            required
            className={isPasswordMatch() ? "" : classes.InputError}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호 입력"
            required
            className={isPasswordMatch() ? "" : classes.InputError}
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          ></input>
        </div>

        <div className={classes.JoinBoxDesc}>
          {!isPasswordMatch() && (
            <span className="Check">비밀번호가 일치하지 않습니다</span>
          )}
          <span>8자 이상 입력해주세요</span>
          <span>영문, 숫자, 특수문자 중 2가지 이상 조합해 주세요</span>
        </div>
        <div className={classes.loginBoxBtn}>
          <Button type="submit" onClick={() => props.onChange("JoinEmail")}>
            다음
          </Button>
        </div>
      </form>
      <div className={classes.JoinBoxLoginBtn}>
        <p>이미 계정이 있으신가요?</p>
        <button type="button" onClick={() => props.onChange("loginForm")}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default JoinForm;
