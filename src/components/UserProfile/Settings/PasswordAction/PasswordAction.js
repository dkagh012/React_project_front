import React, { useState, useEffect } from 'react';
import classes from './PasswordAction.module.scss';
import Button from './../../../UI/Button/Button';
import { IoClose } from "react-icons/io5";

function PasswordAction(props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const handleInputChange = (e) => {
    setNewPassword(e.target.value);

    if (PasswordError) {
      setPasswordError('');
    }
  }

  const handleSave = () => {
    if (newPassword !== newPasswordConfirmation) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
    }
    else {
      props.setEmailValue(newPassword);
      setShowSuccess(true);
      setPasswordError('');
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
    <div className={classes.PasswordAction_wrap}>
      <div className={classes.PasswordActionBack} onClick={props.showClose}></div>
      <div className={classes.PasswordActionBox}>
        {showSuccess ? (
          <h1>이메일 변경이 완료되었습니다.</h1>
        ) : (
          <form>
            <div className={classes.Close}>
              <button type='button' onClick={props.showClose}>
                <IoClose />
              </button>
            </div>
            {/* 나중에 DB 데이터를 뽑아서 현재 비밀번호 값을 가져와야한다 */}
            <div className={classes.InputBox}>
              <div>
                <p>현재 비밀번호</p>
                <input
                  type='password'
                  value=""
                  onChange={handleInputChange}
                  placeholder='현재 비밀번호'
                  onFocus={() => {
                    if (PasswordError) {
                      setPasswordError('');
                    }
                  }}
                  className={PasswordError ? classes.InputError : ''}
                />
              </div>
              {PasswordError && <p className={classes.Error}>{PasswordError}</p>}
              <div>
                <p>새로운 비밀번호</p>
                <input
                  type='password'
                  value={newPassword}
                  onChange={handleInputChange}
                  placeholder='새로운 비밀번호'
                  onFocus={() => {
                    if (PasswordError) {
                      setPasswordError('');
                    }
                  }}
                  className={PasswordError ? classes.InputError : ''}
                />

                <input
                  type='password'
                  value={newPasswordConfirmation}
                  onChange={(e) => setNewPasswordConfirmation(e.target.value)}
                  placeholder='새로운 비밀번호 확인'
                  onFocus={() => {
                    if (PasswordError) {
                      setPasswordError('');
                    }
                  }}
                  className={PasswordError ? classes.InputError : ''}
                />
              </div>
              {PasswordError && <p className={classes.Error}>{PasswordError}</p>}
              {PasswordError ? (<p className={classes.Error}>8자 이상 입력해주세요</p>) : (<p className={classes.NonError}>8자 이상 입력해주세요</p>)}
              {PasswordError ? (<p className={classes.Error}>영문,숫자,특수문자 중 2가지 이상 조합해 주세요</p>) : (<p className={classes.NonError}>영문,숫자,특수문자 중 2가지 이상 조합해 주세요</p>)}
              <Button type="button" onClick={handleSave} disabled={!!PasswordError}>
                저장
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default PasswordAction;
