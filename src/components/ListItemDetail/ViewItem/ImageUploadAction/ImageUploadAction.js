import React, { useState } from "react";
import Button from "./../../../UI/Button/Button";
import { IoClose } from "react-icons/io5";
import classes from "./ImageUploadAction.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ImageUploadAction(props) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageErrors, setImageErrors] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [ChangeEvent, setChangeEvent] = useState(false);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).filter(
      (file) => file.size <= 3 * 1024 * 1024
    );

    // Clear existing errors when new images are added
    if (newImages.length > 0) {
      setImageErrors([]);
    }

    const oversizedImages = Array.from(files).filter(
      (file) => file.size > 3 * 1024 * 1024
    );

    if (oversizedImages.length > 0) {
      setImageErrors((prevErrors) => [
        ...prevErrors,
        ...oversizedImages.map((image, index) => ({
          index: selectedImages.length + index,
          error: "이미지는 3MB를 초과할 수 없습니다.",
        })),
      ]);
    }

    setImageURLs((prevURLs) => [
      ...prevURLs,
      ...newImages.map((image) => URL.createObjectURL(image)),
    ]);

    setSelectedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image, i) => i !== index)
    );

    setImageErrors((prevErrors) =>
      prevErrors.filter((error) => error.index !== index)
    );
  };

  const handleChangeClick = () => {
    setChangeEvent(true);
  };

  return (
    <div className={classes.ImageUploadAction}>
      {ChangeEvent ? (
        <div>
          <div
            className={classes.PopupBoxBackground}
            onClick={props.ShowClose}
          ></div>
          <div className={classes.PopupTrue}>
            <h1 className={classes.PopupTrueText}> 변경이 완료되었습니다.</h1>
          </div>
        </div>
      ) : (
        <div>
          <div
            onClick={props.ShowClose}
            className={classes.PopupBoxBackground}
          ></div>
          <div className={classes.PopupBox}>
            <div className={classes.Popup_Head}>
              <button onClick={props.ShowClose} type="button">
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
                    <Swiper
                      modules={[Navigation, Scrollbar, A11y]}
                      slidesPerView={3}
                      centeredSlides={false}
                      watchOverflow={true}
                    >
                      {selectedImages.map((image, index) => (
                        <SwiperSlide
                          key={index}
                          className={classes.ImagePreview}
                        >
                          <img
                            src={imageURLs[index]}
                            alt={`미리보기 ${index + 1}`}
                          />

                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                          >
                            <IoClose />
                          </button>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className={classes.Popup_Desc}>
                    {imageErrors.map((error) => (
                      <span key={error.index} className={classes.Error}>
                        {error.error}
                      </span>
                    ))}
                    <span>이미지는 최대 8개까지 등록할 수 있습니다</span>
                    <span>이미지는 1장당 최대 3MB까지 등록할 수 있습니다</span>
                  </div>
                </div>
                <div className={classes.UploadBtn}>
                  <Button type="button" onClick={handleChangeClick}>
                    변경
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageUploadAction;
