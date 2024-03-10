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
  // const [id, setId] = useState("");
  const [emailValue, setEmailValue] = useState(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // JSON 객체 생성
    const formData = {
      member_id: name,
      member_email: emailValue,
      member_password: password,
    };
    // fetch 요청
    fetch("http://192.168.200.103:8000/insert_SingData", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        console.log(response);
        const data = await response.json();
        if (data.success) {
          alert("등록되었습니다.");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        console.error("Error sending data:", error);
      });
  };

  return (
    <div className={classes.JoinBox}>
      <form id="memberForm" onSubmit={handleSubmit}>
        <div>
          <h1>이름을 입력해주세요</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="이름 입력"
          />
          {name.trim() === "" && (
            <span className="Check">이름을 입력해주세요</span>
          )}
        </div>
        <div>
          <h1>이메일을 입력해주세요</h1>
          <input
            type="text"
            value={emailValue}
            required
            className={isEmailValid ? "" : classes.InputError}
            placeholder="이메일 입력"
            onChange={(e) => setEmailValue(e.target.value)}
          />
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
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호 확인"
            required
            className={isPasswordMatch() ? "" : classes.InputError}
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </div>
        <div className={classes.JoinBoxDesc}>
          {!isPasswordMatch() && (
            <span className="Check">비밀번호가 일치하지 않습니다</span>
          )}
          <span>8자 이상 입력해주세요</span>
          <span>영문, 숫자, 특수문자 중 2가지 이상 조합해 주세요</span>
        </div>
        <div className={classes.loginBoxBtn}>
          <Button type="submit">다음</Button>
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
