import React from 'react';
import classes from './ListClickPopup.module.scss';
import { IoClose } from 'react-icons/io5';
import { showLoginAction, hideLoginAction } from '../../../reducers/LoginAction/actions';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../../Header/Login/Login';
function ListClickPopup({ showPopup, setShowPopup }) {
  const showLogin = useSelector((state) => state.loginReducer.showLogin);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setShowPopup(false);   // 팝업을 닫는다
    dispatch(showLoginAction()); // 로그인 창을 보여주는 액션을 디스패치한다
  };

  const handleCloseLogin = () => {
    dispatch(hideLoginAction());
  };

  // showPopup과 showLogin 상태에 따라 조건부 렌더링을 수행
  return (
    <>
      {showPopup && (
        <div className={classes.ListClickPopupBox}>
          <div className={classes.ListClickPopupBackground} onClick={() => setShowPopup(false)}></div>
          <div className={classes.ListClickPopupBoxWrapper}>
            <button type="button" className={classes.CloseBtn} onClick={() => setShowPopup(false)}>
              <IoClose />
            </button>
            <div className={classes.ListClickPopupBoxBody}>
              <p>
                이 기능은 로그인이 필요한 기능입니다. 회원으로 가입하시겠습니까?
              </p>
              <div className={classes.ListClickPopupBoxInfo}>
                <span>이미 회원가입을 완료했다면?</span>
                <button type="button" onClick={handleLoginClick}>로그인하기</button>
              </div>
              <button type="button" className={classes.JoinBtn}>회원가입</button>
            </div>
          </div>
        </div>
      )}
      {showLogin && <Login onClose={handleCloseLogin} />}
    </>
  );
}

export default ListClickPopup;
