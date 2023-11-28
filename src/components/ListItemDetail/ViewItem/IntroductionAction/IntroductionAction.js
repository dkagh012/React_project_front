import React, { useState } from "react";
import classes from "./IntroductionAction.module.scss";
import { IoClose } from "react-icons/io5";
import Button from "./../../../UI/Button/Button";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function IntroductionAction(props) {
  const [inputValue, setInputValue] = useState("");
  const [ValueLength, setValueLength] = useState("0");
  const [tags, setTags] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setValueLength(e.target.value.length);
  };
  // Function to add tag
  const addTag = (newTag) => {
    if (newTag.length <= 8 && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };

  // Function to remove tag
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Handle Add button click
  const handleAddClick = () => {
    const inputElement = document.querySelector(".input-tag");
    const newTag = inputElement.value.trim();
    if (newTag) {
      addTag(newTag);
      inputElement.value = ""; // Clear the input field
    }
  };
  return (
    <div className={classes.Popup}>
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
              <textarea
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                maxLength={60}
              />
              <p>{ValueLength}/60</p>
            </div>
            <div className={classes.companyTag}>
              <h2>업체 소개 태그</h2>
              <div>
                <input
                  className="input-tag"
                  type="text"
                  placeholder="최대 8자로 태그를 작성해주세요"
                />
                <button type="button" onClick={handleAddClick}>
                  Add
                </button>
              </div>
              <span>태그는 최대 8개까지 등록할 수 있습니다.</span>
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
                        <button type="button" onClick={() => removeTag(tag)}>
                          <IoClose />
                        </button>
                      </span>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            <Button type="button">변경</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IntroductionAction;
