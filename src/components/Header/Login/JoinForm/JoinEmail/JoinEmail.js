import React from "react";
import classes from "./JoinEmail.module.scss";
import Button from "../../../../UI/Button/Button"
function JoinForm(props) {
  return (
    <div className={classes.JoinEmailBox}>
      <form>
        <div>
          <div className={classes.JoinEmailTitle}>
            <h1>이메일 인증 코드를 입력해 주세요</h1>
          </div>
          <div className={classes.JoinEmailDesc}>
            <span className={classes.emailaddress}>askdk@naver.com</span>으로
            회원가입 이메일 인증 코드를 전달하였습니다. 30분 이내에 이메일에
            있는 인증코드를 입력해주세요.
          </div>
          <div className={classes.JoinEmailInput}>
            <input type="number" id="EmailNumber"></input>
            <input type="number" id="EmailNumber"></input>
            <input type="number" id="EmailNumber"></input>
            <input type="number" id="EmailNumber"></input>
            <input type="number" id="EmailNumber"></input>
            <input type="number" id="EmailNumber"></input>
          </div>
          <span className={classes.JoinEmailCheck}>
            인증 코드가 수신되지 않은 경우 스팸메일함 또는 입력하신 이메일
            주소가 정확한지 확인해 주세요
          </span>
        </div>

        <Button type="button" onClick={() => props.onChange("JoinFinish")}> 회원가입 완료</Button>
      </form>
    </div>
  );
}

export default JoinForm;
