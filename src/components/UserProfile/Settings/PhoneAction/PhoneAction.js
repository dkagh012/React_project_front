import React, { useState, useEffect } from 'react';
import classes from './PhoneAction.module.scss';
import Button from './../../../UI/Button/Button';
import { IoClose } from "react-icons/io5";

function PhoneAction(props) {
  const [newPhone, setNewPhone] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleInputChange = (e) => {
    setNewPhone(e.target.value);

    // Clear the phoneNumberError when the user starts typing
    if (phoneNumberError) {
      setPhoneNumberError('');
    }
  }

  const handleSave = () => {
    // Validate the phone number format
    if (!/^\d{3}-\d{4}-\d{4}$/.test(newPhone)) {
      setPhoneNumberError('올바른 휴대폰 번호 형식이 아닙니다.');
    } else {
      props.setPhoneValue(newPhone);
      setShowSuccess(true);
      setPhoneNumberError(''); // Clear the error message
      // Automatically close the PhoneAction after 3 seconds
      setTimeout(() => {
        props.showClose();
      }, 3000);
    }
  };

  useEffect(() => {
    // Clear the success message after 3 seconds
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      // Clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className={classes.PhoneAction_wrap}>
      <div className={classes.PhoneActionBack} onClick={props.showClose}></div>
      <div className={classes.PhoneActionBox}>
        {showSuccess ? ( // Display success message if showSuccess is true
          <h1>휴대폰 번호 변경이 완료되었습니다.</h1>
        ) : (
          <form>
            <div className={classes.Close}>
              <button type='button' onClick={props.showClose}>
                <IoClose />
              </button>
            </div>
            <div className={classes.InputBox}>
              <p>휴대폰 번호를 입력해주세요</p>
              <input
                type='text'
                value={newPhone}
                onChange={handleInputChange}
                onFocus={() => {
                  if (phoneNumberError) {
                    setPhoneNumberError('');
                  }
                }}
                className={phoneNumberError ? classes.InputError : ''}
              />
              {phoneNumberError && <p className={classes.Error}>{phoneNumberError}</p>}
              <Button type="button" onClick={handleSave} disabled={!!phoneNumberError}>
                저장
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default PhoneAction;
