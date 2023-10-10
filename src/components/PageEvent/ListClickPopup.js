import React from "react";
import classes from "./ListClickPopup.module.scss";
import { IoClose } from "react-icons/io5";
function ListClickPopup() {
  return (
    <div className={classes.ListClickPopupBox}>
      <div className={classes.ListClickPopupBackground}></div>
      <div className={classes.ListClickPopupBoxWrapper}>
        <button type="button" >
          <IoClose />
        </button>
        <p>
          이 기능은 로그인이 필요한 기능입니다 회원으로 가입하시겠습니까?
        </p>
        <div>
          <span>이미 회원가입을 완료했다면?</span><button type="button">로그인하기</button>
        </div>
        <button type="button">회원가입</button>
      </div>
    </div>
  )
}

export default ListClickPopup;