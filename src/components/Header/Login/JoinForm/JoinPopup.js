import React, { useState } from "react";
import classes from "./JoinPopup.module.scss";
import Button from "../../../UI/Button/Button";
import { Link } from "react-router-dom";

function JoinPopup(props) {
  // 전체 동의 체크박스의 상태를 관리하는 state
  const [allChecked, setAllChecked] = useState(false);

  // 각 항목 체크박스의 상태를 관리하는 state
  const [checkboxStates, setCheckboxStates] = useState({
    term: false,
    privacy: false,
    age: false,
    marketing: false,
  });

  // 필수 항목 체크 여부를 확인하는 함수
  const isRequiredChecked = () =>
    checkboxStates.term && checkboxStates.privacy && checkboxStates.age;

  // 전체 동의 체크박스를 클릭했을 때 나머지 체크박스를 모두 체크하는 함수
  const handleAllCheckboxClick = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);

    // 모든 필수 항목 체크박스 상태 업데이트
    setCheckboxStates({
      term: newAllChecked,
      privacy: newAllChecked,
      age: newAllChecked,
      marketing: newAllChecked,
    });
  };

  // 각 항목 체크박스를 클릭했을 때 전체 동의 체크박스 상태를 업데이트하는 함수
  const handleCheckboxClick = (key) => {
    const newCheckboxStates = {
      ...checkboxStates,
      [key]: !checkboxStates[key],
    };

    // 전체 동의 체크박스 상태 업데이트
    const newAllChecked = Object.values(newCheckboxStates).every(Boolean);
    setAllChecked(newAllChecked);

    // 각 항목 체크박스 상태 업데이트
    setCheckboxStates(newCheckboxStates);
  };

  // 다음 버튼 클릭 시 필수 항목 체크 여부 확인
  const handleNextClick = () => {
    if (!isRequiredChecked()) {
      // 필수 항목이 체크되지 않았을 경우 에러 처리 (예: 모달 띄우기 등)
      console.error("필수 항목에 동의해주세요.");
      return;
    }

    // 필수 항목이 체크되었을 경우 다음 단계로 이동
    props.onChange("joinForm");
  };

  return (
    <div className={classes.JoinBox}>
      <div className={classes.JoinInputBox}>
        <h1>약관을 동의해주세요</h1>
        <div className={classes.JoinInputAll}>
          <input
            type="checkbox"
            id="all"
            checked={allChecked}
            onChange={handleAllCheckboxClick}
          />
          <label htmlFor="all">전체동의</label>
        </div>
        <ul>
          <li>
            <input
              type="checkbox"
              checked={checkboxStates.term}
              onChange={() => handleCheckboxClick("term")}
            />
            <label>(필수)이용 약관 동의</label>
            <Link to="/stipulation" onClick={props.onClose}>
              보기
            </Link>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkboxStates.privacy}
              onChange={() => handleCheckboxClick("privacy")}
            />
            <label>(필수)개인정보처리방침 동의</label>
            <Link to="/individual" onClick={props.onClose}>
              보기
            </Link>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkboxStates.age}
              onChange={() => handleCheckboxClick("age")}
            />
            <label>(필수)만 14세 이상 동의</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkboxStates.marketing}
              onChange={() => handleCheckboxClick("marketing")}
            />
            <label>마케팅 수신 동의</label>
          </li>
        </ul>
      </div>
      <Button type="submit" onClick={handleNextClick}>
        다음
      </Button>
      <div className={classes.JoinBoxLoginBtn}>
        <p>이미 계정이 있으신가요?</p>
        <button type="button" onClick={() => props.onChange("loginForm")}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default JoinPopup;
