import React, { useState } from 'react';
import classes from './EmailAction.module.scss';
import Button from './../../../UI/Button/Button';
import { IoClose } from "react-icons/io5";
import Certification from './Certification/Certification';

function EmailAction(props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [CodeAuth, setCodeAuth] = useState(false);
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
      setShowSuccess(true);
      setEmailError('');
    }
  };
  if (CodeAuth) {
    props.setEmailValue(newEmail)
  }
  return (
    <div className={classes.EmailAction_wrap}>
      <div className={classes.EmailActionBack} onClick={props.showClose}></div>
      <div className={classes.EmailActionBox}>
        {showSuccess ? (
          <Certification
            showClose={props.showClose}
            EmailValue={setCodeAuth}
          />
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
                다음
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EmailAction;
