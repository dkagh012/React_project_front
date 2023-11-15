import React, { useState } from 'react';
import classes from './Certification.module.scss';
import Button from '../../../../UI/Button/Button';
import { IoClose } from "react-icons/io5";

function Certification(props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [emailInputs, setEmailInputs] = useState(['', '', '', '', '', '']);
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (index, value) => {
    const newEmailInputs = [...emailInputs];
    newEmailInputs[index] = value;
    setEmailInputs(newEmailInputs);

    if (emailError) {
      setEmailError('');
    }
  }

  const handleSave = () => {
    const correctCode = ['1', '2', '3', '4', '5', '6'];

    if (JSON.stringify(emailInputs) === JSON.stringify(correctCode)) {
      // 인증 코드가 올바를 경우
      setShowSuccess(true);
      setEmailError('');
      props.EmailValue(true);
      setTimeout(() => {
        props.showClose();
      }, 3000);
    } else {
      setEmailError('인증 코드를 다시 확인해 주세요');
    }
  };

  // 나머지 컴포넌트 코드

  return (
    <div className={classes.Certification_wrap}>
      <div className={classes.CertificationBack} onClick={props.showClose}></div>
      <div className={classes.CertificationBox}>
        {showSuccess ? (
          <h1>이메일이 변경되었습니다.</h1>
        ) : (
          <form>
            <div className={classes.Close}>
              <button type='button' onClick={props.showClose}>
                <IoClose />
              </button>
            </div>
            <div className={classes.InputBox}>
              <div>
                <p>인증 코드를 입력해주세요</p>
                <span className={classes.SendCodeDesc}>
                  <h4>이메일</h4>으로 회원가입 이메일 인증 코드를 전덜하였습니다 30분 이내에 이메일에 있는 인증 코드를 입력해 주세요
                </span>
                <div className={classes.InputCode}>
                  {emailInputs.map((value, index) => (
                    <input
                      key={index}
                      type='text'
                      value={value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      placeholder=''
                      onFocus={() => {
                        if (emailError) {
                          setEmailError('');
                        }
                      }}
                      className={emailError ? classes.InputError : ''}
                    />
                  ))}
                </div>
              </div>
              <p className={classes.NonError}>인증 코드가 수신되지 않은 경우 입력하신 이메일 주소가 정확한지 확인해 주세요</p>
              {emailError && <p className={classes.Error}>{emailError}</p>}
              <div className={classes.SendCode}>
                <span>05:00</span><button type='button'>인증 코드 재발송</button>
              </div>
              <Button type="button" onClick={handleSave} disabled={!!emailError}>
                저장
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Certification;
