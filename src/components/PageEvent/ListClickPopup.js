import React from 'react';
import classes from './ListClickPopup.module.scss';
import { IoClose } from 'react-icons/io5';

function ListClickPopup({ showPopup, setShowPopup }) {
  console.log(showPopup);
  console.log(setShowPopup);
  return (
    showPopup && (
      <div className={classes.ListClickPopupBox}>
        <div className={classes.ListClickPopupBackground}></div>
        <div className={classes.ListClickPopupBoxWrapper}>
          <button type="button" className={classes.CloseBtn} onClick={() => setShowPopup(false)}>
            <IoClose />
          </button>
          <div className={classes.ListClickPopupBoxBody}>
            <p>
              이 기능은 로그인이 필요한 기능입니다 회원으로 가입하시겠습니까?
            </p>
            <div className={classes.ListClickPopupBoxInfo}>
              <span>이미 회원가입을 완료했다면?</span><button type="button">로그인하기</button>
            </div>
            <button type="button" className={classes.JoinBtn}>회원가입</button>
          </div>
        </div>
      </div>
    )
  );
}

export default ListClickPopup;
