import React, { useState } from "react";
import Button from "./../../../UI/Button/Button";
import { IoClose } from "react-icons/io5";
import classes from "./ImageUploadAction.module.scss";

function ImageUploadAction() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    // Convert files to an array and update the state
    setSelectedImages((prevImages) => [...prevImages, ...files]);

    // You can use FileReader to display immediate previews if needed
  };

  return (
    <div className={classes.ImageUploadAction}>
      <div className={classes.PopupBoxBackground}></div>
      <div className={classes.PopupBox}>
        <div className={classes.Popup_Head}>
          <button type="button">
            <IoClose />
          </button>
        </div>
        <div className={classes.Popup_Body}>
          <form>
            <div>
              <div className={classes.Popup_Intro}>
                <h2>업체 소개글</h2>
                <p>기업을 소개할 수 있는 이미지를 업로드해주세요</p>
              </div>
              <div className={classes.ImageUpload}>
                <label>
                  이미지 업로드
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    multiple
                    onChange={handleImageChange}
                  />
                </label>
                {/* 이미지 미리보기 렌더링 */}
                {selectedImages.map((image, index) => (
                  <div key={index} className={classes.ImagePreview}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`미리보기 ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div className={classes.Popup_Desc}>
                <span>이미지는 최대 8개까지 등록할 수 있습니다</span>
                <span>이미지는 1장당 최대 3MB까지 등록할 수 있습니다</span>
              </div>
            </div>
            <div className={classes.UploadBtn}>
              <Button type="button">변경</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImageUploadAction;
