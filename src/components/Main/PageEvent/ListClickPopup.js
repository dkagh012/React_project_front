import React from "react";
import classes from "./ListClickPopup.module.scss";
import { IoClose } from "react-icons/io5";
import {
  showLoginAction,
  hideLoginAction,
} from "../../../store/reducers/LoginAction/actions";
import { useSelector, useDispatch } from "react-redux";
import Login from "../../Header/Login/Login";

function ListClickPopup({ showPopup, setShowPopup }) {
  const showLogin = useSelector((state) => state.loginReducer.showLogin);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setShowPopup(false); // 팝업을 닫는다
    dispatch(showLoginAction()); // 로그인 창을 보여주는 액션을 디스패치한다
  };

  const handleJoinClick = () => {
    setShowPopup(false); // 팝업을 닫는다
    dispatch(showLoginAction("JoinPopup")); // 로그인 창을 '회원가입' 폼으로 보여주는 액션을 디스패치한다
  };

  const handleCloseLogin = () => {
    dispatch(hideLoginAction());
  };

  return (
    <>
      {showPopup && (
        <div className={classes.ListClickPopupBox}>
          <div
            className={classes.ListClickPopupBackground}
            onClick={() => setShowPopup(false)}
          ></div>
          <div className={classes.ListClickPopupBoxWrapper}>
            <button
              type="button"
              className={classes.CloseBtn}
              onClick={() => setShowPopup(false)}
            >
              <IoClose />
            </button>
            <div className={classes.ListClickPopupBoxBody}>
              <p>
                이 기능은 로그인이 필요한 기능입니다. 회원으로 가입하시겠습니까?
              </p>
              <div className={classes.ListClickPopupBoxInfo}>
                <span>이미 회원가입을 완료했다면?</span>
                <button type="button" onClick={handleLoginClick}>
                  로그인하기
                </button>
              </div>
              <button
                type="button"
                className={classes.JoinBtn}
                onClick={handleJoinClick}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      )}
      {showLogin && <Login onClose={handleCloseLogin} />}
    </>
  );
}

export default ListClickPopup;
