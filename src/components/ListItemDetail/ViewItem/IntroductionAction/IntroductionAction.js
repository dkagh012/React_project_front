import React, { useState } from "react";
import classes from "./IntroductionAction.module.scss";
import { IoClose } from "react-icons/io5";
import Button from "./../../../UI/Button/Button";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { containsForbiddenWords } from "../../../../DATE/ProfanityFilter"; // Adjust the import path as necessary

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function IntroductionAction(props) {
  const [inputValue, setInputValue] = useState("");
  const [ValueLength, setValueLength] = useState("0");
  const [tags, setTags] = useState([]);
  const [isLengthErrorVisible, setIsLengthErrorVisible] = useState(false);
  const [isSwearWordErrorVisible, setIsSwearWordErrorVisible] = useState(false);
  const [isSwearWordErrorTag, setIsSwearWordErrorTag] = useState(false);
  const [isError, setIsError] = useState(false);
  const [detectedSwearWord, setDetectedSwearWord] = useState("");
  const [detectedSwearWordTag, setDetectedSwearWordTag] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
    setValueLength(input.length);
    setIsLengthErrorVisible(false);

    const swearWord = containsForbiddenWords(input);
    if (swearWord) {
      setDetectedSwearWord(swearWord);
      setIsSwearWordErrorVisible(true);
    } else {
      setIsSwearWordErrorVisible(false);
    }
  };
  const addTag = (newTag) => {
    if (newTag.length <= 8 && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleAddClick = () => {
    if (isSwearWordErrorTag === false) {
      const inputElement = document.querySelector(".input-tag");
      const newTag = inputElement.value.trim();
      if (newTag) {
        addTag(newTag);
        inputElement.value = ""; // Clear the input field
      }
    }
  };

  const handleChangeClick = () => {
    const isTextAreaValid = inputValue.length >= 10;
    const isSwearWordErrorVisible = !containsForbiddenWords(inputValue);

    setIsLengthErrorVisible(!isTextAreaValid);

    setIsSwearWordErrorVisible(!isSwearWordErrorVisible);
    setIsError(isTextAreaValid && isSwearWordErrorVisible);
  };

  const handleTagInputChange = (e) => {
    const tagInput = e.target.value;
    const swearWordInTag = containsForbiddenWords(tagInput);

    if (swearWordInTag) {
      setDetectedSwearWordTag(swearWordInTag);
      setIsSwearWordErrorTag(true);
    } else {
      setIsSwearWordErrorTag(false);
    }
  };

  return (
    <div className={classes.Popup}>
      {isError ? (
        <h1> 변경이 완료되었습니다.</h1>
      ) : (
        <div>
          <div
            className={classes.PopupBoxBackground}
            onClick={props.ShowClose}
          ></div>
          <div className={classes.PopupBox}>
            <div className={classes.Popup_Head}>
              <button type="button" onClick={props.ShowClose}>
                <IoClose />
              </button>
            </div>
            <div className={classes.Popup_Body}>
              <form>
                <div className={classes.companyIntro}>
                  <h2>업체 간단 소개</h2>
                  <div className={classes.companyTextBox}>
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
                    <p>{ValueLength}/60</p>
                  </div>
                  <div className={classes.companyError}>
                    {isLengthErrorVisible && (
                      <span>최소 10자 이상의 내용을 입력해 주세요</span>
                    )}
                    {isSwearWordErrorVisible && (
                      <span>
                        비속어는 사용할 수 없습니다 ‘{detectedSwearWord}’
                      </span>
                    )}
                  </div>
                </div>
                <div className={classes.companyTag}>
                  <h2>업체 소개 태그</h2>
                  <div>
                    <input
                      type="text"
                      placeholder="최대 8자로 태그를 작성해주세요"
                      onChange={handleTagInputChange} // Add onChange handler
                      className={`${
                        isSwearWordErrorTag
                          ? classes.textareaError
                          : "input-tag"
                      }`}
                    />
                    <button type="button" onClick={handleAddClick}>
                      추가
                    </button>
                  </div>
                  <div>
                    {isSwearWordErrorTag && (
                      <span className={classes.companyError}>
                        비속어는 사용할 수 없습니다 ‘{detectedSwearWordTag}’
                      </span>
                    )}
                    <span>태그는 최대 8개까지 등록할 수 있습니다.</span>
                  </div>
                </div>
                {tags.length > 0 && (
                  <div className={classes.companyTagList}>
                    <Swiper
                      modules={[Pagination, Scrollbar, A11y]}
                      slidesPerView={"auto"}
                      spaceBetween={8}
                      centeredSlides={false}
                      watchOverflow={true}
                      // Additional properties as needed
                    >
                      {tags.map((tag, index) => (
                        <SwiperSlide key={index}>
                          <span className="tag">
                            #{tag}
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                            >
                              <IoClose />
                            </button>
                          </span>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
                <Button type="button" onClick={handleChangeClick}>
                  변경
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IntroductionAction;
