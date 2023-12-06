import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./../../../UI/Button/Button";
import { containsForbiddenWords } from "../../../../DATE/ProfanityFilter"; // Adjust the import path as necessary
import classes from "./CompanyAction.module.scss";
function CompanyAction(props) {
  const [isSwearWordErrorVisible, setIsSwearWordErrorVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [detectedSwearWord, setDetectedSwearWord] = useState("");
  const [isLengthErrorVisible, setIsLengthErrorVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [ValueLength, setValueLength] = useState("0");
  const handleInputChange = (e) => {
    const input = e.target.value;
    setValueLength(input.length);
    setInputValue(input);
    setIsLengthErrorVisible(false);
    const swearWord = containsForbiddenWords(input);
    if (swearWord) {
      setDetectedSwearWord(swearWord);
      setIsSwearWordErrorVisible(true);
    } else {
      setIsSwearWordErrorVisible(false);
    }
  };
  const handleChangeClick = () => {
    const isTextAreaValid = inputValue.length >= 20;
    const isSwearWordErrorVisible = !containsForbiddenWords(inputValue);

    setIsLengthErrorVisible(!isTextAreaValid);

    setIsSwearWordErrorVisible(!isSwearWordErrorVisible);
    console.log(isTextAreaValid);
    console.log(isSwearWordErrorVisible);
    setIsError(isTextAreaValid && isSwearWordErrorVisible);
  };

  return (
    <div className={classes.CompanyAction}>
      <div
        className={classes.PopupBoxBackground}
        onClick={props.ShowClose}
      ></div>
      <div className={classes.PopupBox}>
        {isError ? (
          <div className={classes.PopupTrue}>
            <h1> 정보 변경이 완료되었습니다</h1>
          </div>
        ) : (
          <div>
            <div className={classes.Popup_Head}>
              <button type="button" onClick={props.ShowClose}>
                <IoClose />
              </button>
            </div>
            <div className={classes.Popup_Body}>
              <form>
                <div>
                  <h2>업체 소개글</h2>
                </div>
                <div>
                  <textarea
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    maxLength={60}
                    className={`${
                      isLengthErrorVisible || isSwearWordErrorVisible
                        ? classes.textareaError
                        : ""
                    }`}
                  />
                  <p
                    className={`${
                      isLengthErrorVisible || isSwearWordErrorVisible
                        ? classes.TextError
                        : ""
                    }`}
                  >
                    {ValueLength}/500
                  </p>
                </div>
                <div className={classes.companyError}>
                  {isLengthErrorVisible && (
                    <span>최소 20자 이상의 내용을 입력해 주세요</span>
                  )}
                  {isSwearWordErrorVisible && (
                    <span>
                      비속어는 사용할 수 없습니다 ‘{detectedSwearWord}’
                    </span>
                  )}
                </div>
                <div>
                  <Button type="button" onClick={handleChangeClick}>
                    변경
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyAction;
