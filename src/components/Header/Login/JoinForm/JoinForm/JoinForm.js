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
    console.log("1");

    // 각 필드의 값을 추출
    const Id = document.getElementById("Id").value;
    const Email = document.getElementById("Email").value;
    const password = document.getElementById("password").value;
    // 다중 선택 업체들의 값을 배열로 추출

    // JSON 객체 생성
    const formData = {
      member_Id: Id, //아이디
      member_Email: Email,
      member_password: password,
    };
    console.log(formData);
    // fetch 요청
    // fetch("http://localhost:8000/insert_SingData", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then(async (response) => {
    //     const data = await response.json();
    //     console.log(data);
    //     if (data.success) {
    //       alert("등록되었습니다.");
    //     } else {
    //       alert(data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error sending data:", error);
    //   });
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
            id="Id"
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
            id="Email"
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
            id="password"
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
          {/* <Button type="submit">다음</Button> */}
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
