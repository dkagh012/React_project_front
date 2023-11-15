import React, { useState, useEffect } from 'react';
import classes from './PasswordAction.module.scss';
import Button from './../../../UI/Button/Button';
import { IoClose } from "react-icons/io5";

function PasswordAction(props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const handleInputChange = (e) => {
    setNewPassword(e.target.value);

    if (PasswordError) {
      setPasswordError('');
    }
  }

  const validatePassword = (password) => {
    const lengthValid = password.length >= 8;
    const hasCharacter = /[a-zA-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password);

    const validConditions = [lengthValid, (hasCharacter + hasDigit + hasSpecialCharacter) >= 2];

    return validConditions.every(condition => condition);
  }

  const handleSave = () => {
    if (newPassword !== newPasswordConfirmation) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!validatePassword(newPassword)) {
      setPasswordError('8자 이상 입력하고, 영문, 숫자, 특수문자 중 2가지 이상을 조합해 주세요.');
      return;
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
  // 나중에 DB값을 받아서 하는것
  // async function checkCurrentPassword(currentPassword) {
  //   try {
  //     const response = await axios.post('/api/verify-password', { currentPassword });
  //     return response.data.isPasswordValid;
  //   } catch (error) {
  //     console.error('Error verifying password', error);
  //     return false;
  //   }
  // 
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
        props.showClose();
      }, 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showSuccess]);
  return (
    <div className={classes.PasswordAction_wrap}>
      <div className={classes.PasswordActionBack} onClick={props.showClose}></div>
      <div className={classes.PasswordActionBox}>
        {showSuccess ? (
          <h1>비밀번호 변경이 완료되었습니다</h1>
        ) : (
          <form>
            <div className={classes.Close}>
              <button type='button' onClick={props.showClose}>
                <IoClose />
              </button>
            </div>
            <div className={classes.InputBox}>
              <div>
                <p>현재 비밀번호</p>
                <input
                  type='password'
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder='현재 비밀번호'
                  onFocus={() => {
                    if (PasswordError) {
                      setPasswordError('');
                    }
                  }}
                // className={PasswordError ? classes.InputError : ''}
                />
              </div>
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
                {PasswordError && (
                  <p className={classes.Error}>비밀번호가 일치하지 않습니다.</p>
                )}
              </div>
              {PasswordError && <p className={classes.Error}>{PasswordError}</p>}
              {PasswordError ? (
                <p className={classes.Error}>8자 이상 입력해주세요</p>
              ) : (
                <p className={classes.NonError}>8자 이상 입력해주세요</p>
              )}
              {PasswordError ? (
                <p className={classes.Error}>영문, 숫자, 특수문자 중 2가지 이상 조합해 주세요</p>
              ) : (
                <p className={classes.NonError}>영문, 숫자, 특수문자 중 2가지 이상 조합해 주세요</p>
              )}
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
