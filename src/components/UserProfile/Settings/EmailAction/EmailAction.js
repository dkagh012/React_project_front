import React, { useState, useEffect } from 'react';
import classes from './EmailAction.module.scss';
import Button from './../../../UI/Button/Button';
import { IoClose } from "react-icons/io5";

function EmailAction(props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    setNewEmail(e.target.value);

    if (emailError) {
      setEmailError('');
    }
  }
  const handleSave = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(newEmail)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else {
      props.setEmailValue(newEmail);
      setShowSuccess(true);
      setEmailError('');
      setTimeout(() => {
        props.showClose();
      }, 3000);
    }
  };
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className={classes.EmailAction_wrap}>
      <div className={classes.EmailActionBack} onClick={props.showClose}></div>
      <div className={classes.EmailActionBox}>
        {showSuccess ? (
          <h1>이메일 변경이 완료되었습니다.</h1>
        ) : (
          <form>
            <div className={classes.Close}>
              <button type='button' onClick={props.showClose}>
                <IoClose />
              </button>
            </div>
            <div className={classes.InputBox}>
              <div>
                <p>변경할 이메일을 입력해주세요</p>
                <input
                  type='text'
                  value={newEmail}
                  onChange={handleInputChange}
                  placeholder='이메일을 입력해주세요'
                  onFocus={() => {
                    if (emailError) {
                      setEmailError('');
                    }
                  }}
                  className={emailError ? classes.InputError : ''}
                />
              </div>
              {emailError && <p className={classes.Error}>{emailError}</p>}
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

export default EmailAction;
