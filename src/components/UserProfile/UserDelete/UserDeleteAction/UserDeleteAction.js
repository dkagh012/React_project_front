import React, { useState, useEffect, useRef } from 'react';
import classes from './UserDeleteAction.module.scss';
import Button from './../../../UI/Button/Button';
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
function UserDeleteAction(props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [UserDeleteNumberError, setUserDeleteNumberError] = useState('');
  const [ShowInputList, setShowInputList] = useState(false);
  const dropdownRef = useRef(null); // 드롭다운 ref 생성

  const [selectedReason, setSelectedReason] = useState(''); // 탈퇴 사유를 저장할 새로운 상태

  const handleReasonSelect = (reason) => {
    setSelectedReason(reason);
    setShowInputList(false); // 탈퇴 사유를 선택하면 목록을 닫음
  };
  const handleListOpen = () => {
    setShowInputList(prev => !prev);
    setUserDeleteNumberError('');

  }
  const handleSave = () => {
    if (selectedReason === '') {
      setUserDeleteNumberError('탈퇴 사유를 선택해 주세요');
      return;
    }
    setUserDeleteNumberError(''); // 탈퇴 사유가 선택되었을 때 오류 메시지 초기화
    setShowSuccess(true);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowInputList(false);
      }
    };

    // 문서 전체에 이벤트 리스너 추가
    document.addEventListener('mousedown', handleClickOutside);

    // 컴포넌트가 언마운트되거나 업데이트되기 전에 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={classes.UserDeleteAction_wrap}>
      <div className={classes.UserDeleteActionBack} onClick={props.showClose}></div>
      <div className={classes.UserDeleteActionBox} >
        {showSuccess ? (
          <div className={classes.UserDeleteClose}>
            <div>
              <h1>회원 탈퇴가 신청되었습니다.</h1>
              <span>탈퇴 신청한 계정은 탈퇴 처리 될 때까지 사용 불가합니다</span>
              <span>탈퇴 처리가 완료된 후 해당 이메일로 재가입 가능합니다</span>
            </div>
            <div>
              <Button type="button" onClick={props.showClose}>확인</Button>
            </div>
          </div>
        ) : (
          <form>
            <div className={classes.Close}>
              <button type='button' onClick={props.showClose}>
                <IoClose />
              </button>
            </div>
            <div className={classes.InputBox}>
              <div>
                <p>정말 탈퇴를 하시겠습니까?</p>
                <span>아래 버튼을 누르시면 탈퇴 신청이 완료됩니다</span>
              </div>
              <div className={classes.DeleteForm} ref={dropdownRef}>
                <div className={classes.DeleteValue}>
                  <input type='text' value={selectedReason} readOnly />
                  <button onClick={handleListOpen} type='button'>{selectedReason || '탈퇴 사유 선택'}</button>
                  <FaChevronDown />
                </div>
                {ShowInputList &&
                  <ul>
                    <li onClick={() => handleReasonSelect('더 이상 이용하지 않음')}>더 이상 이용하지 않음</li>
                    <li onClick={() => handleReasonSelect('다른 서비스 이용함')}>다른 서비스 이용함</li>
                    <li onClick={() => handleReasonSelect('사용 빈도가 낮음')}>사용 빈도가 낮음</li>
                    <li onClick={() => handleReasonSelect('이용이 불편하고 장애가 많음')}>이용이 불편하고 장애가 많음</li>
                    <li onClick={() => handleReasonSelect('필요한 정보가 없음')}>필요한 정보가 없음</li>
                  </ul>
                }
              </div>
              {UserDeleteNumberError && <p className={classes.Error}>{UserDeleteNumberError}</p>}
              <Button type="button" onClick={handleSave} disabled={!!UserDeleteNumberError && selectedReason === ''}>
                회원탈퇴
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default UserDeleteAction;
