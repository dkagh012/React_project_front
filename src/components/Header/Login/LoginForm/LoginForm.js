import React from 'react';
import classes from './LoginForm.module.css'
import { Link } from "react-router-dom";
function LoginForm() {
  return (
    <div className={classes.loginBoxForm}>
      <form>
        <div className={classes.loginBoxInput}>
          <div>
            <input type="text" required placeholder='이메일 입력'></input>
            <input type="password" required placeholder='비밀번호 입력'></input>
          </div>
          <button className={classes.loginBoxBtn} type="submit">로그인</button>
        </div>
      </form>
      <ul className={classes.loginBoxList}>
        <li ><Link to="#">이메일 찾기</Link></li>
        <li ><Link to="#">비밀번호 찾기</Link></li>
        <li ><Link to="#">회원가입</Link></li>
      </ul>
    </div>
  )
}

export default LoginForm;
