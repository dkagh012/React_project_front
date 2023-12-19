import classes from "./ViewItem.module.scss";
import React, { useState, useEffect } from "react";
import Image from "../../../assets/image/logo.png";
import CAImage from "../../../assets/image/companyImg.png";
import IntroductionAction from "./IntroductionAction/IntroductionAction";
import PreferredAffiliateCompany from "./PreferredAffiliateCompany/PreferredAffiliateCompany";
import ImageUploadAction from "./ImageUploadAction/ImageUploadAction";
import CompanyAction from "./CompanyAction/CompanyAction";
import Button from "../../UI/Button/Button";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { LuPencil } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function View() {
  const [OpenText, setOpenText] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [IntroAction, setIntroAction] = useState(false);
  const [Preferred, setPreferred] = useState(false);
  const [DescAction, setDescAction] = useState(false);
  const [ViewImageUploadAction, setViewImageUploadAction] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isURLCopy, setURLCopy] = useState(false);
  const handleModifyClick = () => {
    setIsEditing(!isEditing);
  };

  // 회사 소개 팝업
  const handleListOpen = () => {
    setIntroAction((prev) => !prev);
  };
  const handleDescOpen = () => {
    setDescAction((prev) => !prev);
  };
  const handlePrefeerredOpen = () => {
    setPreferred((prev) => !prev);
  };
  const handleImageUploadOpen = () => {
    setViewImageUploadAction((prev) => !prev);
  };
  const handleTextOpenClick = () => {
    setOpenText(!OpenText);
  };

  // Effect to set the current URL when the component mounts
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Function to copy the URL to the clipboard
  const copyUrlToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setURLCopy(true);

      // Set a timeout to reset URLCopy to false after 3 seconds
      setTimeout(() => {
        setURLCopy(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy URL: ", error);
    }
  };
  return (
    <section className="container">
      {IntroAction && <IntroductionAction ShowClose={handleListOpen} />}
      {DescAction && <CompanyAction ShowClose={handleDescOpen} />}
      {ViewImageUploadAction && (
        <ImageUploadAction ShowClose={handleImageUploadOpen} />
      )}
      {Preferred && (
        <PreferredAffiliateCompany ShowClose={handlePrefeerredOpen} />
      )}
      <div className={classes.UrlPopup}>
        <div className={classes.UrlBackground}></div>
        <h2>링크 복사를 완료했습니다</h2>
      </div>
      <h2 className={`${classes.title} ${classes.TopTitle}`}>
        인플루드 (INFLUDE)
      </h2>
      <div className={classes.View_wrap}>
        <div className={classes.View_left}>
          <div className={classes.View_card}>
            <div className={classes.View_Title}>
              <div className={classes.View_Img}>
                <img src={Image} alt=""></img>
              </div>
              <div className={classes.View_Info}>
                <span>
                  서비스 간단 소개다
                  <button type="button" onClick={handleListOpen}>
                    <LuPencil />
                  </button>
                </span>
                <ul className={classes.ViewHash}>
                  <li>#커뮤니티</li>
                  <li>#커뮤니티</li>
                  <li>#커뮤니티</li>
                </ul>
              </div>
            </div>
            <div className={classes.ModifyBox}>
              <h2 className={classes.title}>인플루드 (INFLUDE)</h2>
              <div className={classes.Modify}>
                <button type="button" onClick={handleDescOpen}>
                  소개글 수정
                </button>
                <button type="button" onClick={handleImageUploadOpen}>
                  이미지 수정
                </button>
              </div>
            </div>
            <div className={classes.View_Text}>
              <p>
                <span className={OpenText ? "" : classes.on}>
                  여기는 기업의 소개가 들어갈거여 여기는 기업의 소개가
                  들어갈거여 여기는 기업의 소개가 들어갈거여여기는 기업의 소개가
                  들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가
                  들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가
                  들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가
                  들어갈거여여기는 기 여기는 기업의 소개가 들어갈거여여기는
                  기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는
                  기업의 소개가 들어갈 여기는 기업의 소개가 들어갈거여 여기는
                  기업의 소개가 들어갈거여 여기는 기업의 소개가 들어갈거여여기는
                  기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는
                  기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는
                  기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는
                  기업의 소개가 들어갈거여여기는 기 여기는 기업의 소개가
                  들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가
                  들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가
                  들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의
                </span>
                <button type="button" onClick={handleTextOpenClick}>
                  더 보기
                </button>
              </p>
              <ul>
                <li>
                  <img src={CAImage} alt=""></img>
                </li>
                <li>
                  <img src={CAImage} alt=""></img>
                </li>
                <li>
                  <img src={CAImage} alt=""></img>
                </li>
                <li>
                  <img src={CAImage} alt=""></img>
                </li>
              </ul>
            </div>
            <div className={classes.ModifyBox}>
              <h2 className={classes.title}>선호 제휴 업체</h2>
              <div className={classes.Modify}>
                <button type="button" onClick={handlePrefeerredOpen}>
                  선호 제휴 업체 정보 수정
                </button>
              </div>
            </div>
            <div className={classes.View_Desc}>
              <div>
                <span>
                  저희는 이런 업체를 선호합니다 해당 업체가 아니더라도 연락을
                  주세요저희는 이런 업체를 선호합니다 해당 업체가 아니더라도
                  연락을 주세요저희는 이런 업체를 선호합니다 해당 업체가
                  아니더라도 연락을 주세요저희는 이런 업체를 선호합니다 해당
                  업체가 아니더라도 연락을 주세요저희는 이런 업체를 선호합니다
                  해당 업체가 아니더라도 연락을 주세요체가 아니더라도 연락을
                  주세
                </span>
                <ul className={classes.ViewHash}>
                  <li>#커머스</li>
                  <li>#커머스</li>
                  <li>#커머스</li>
                  <li>#커머스</li>
                </ul>
              </div>
            </div>
            <div className={classes.ModifyBox}>
              <h2 className={classes.title}>관리자</h2>
              <div className={classes.Modify}>
                <button type="button" onClick={handleModifyClick}>
                  {isEditing ? "수정 완료" : "수정"}
                </button>
              </div>
            </div>
            <div className={classes.View_UserList}>
              <span>
                타 업체에 제휴 신청과 제휴 채팅을 할 수 있는 관리자를 URL로
                초대할 수 있습니다
              </span>
              <div className={classes.ViewURL}>
                <input type="text" value={currentUrl} disabled />
                <button type="button" onClick={copyUrlToClipboard}>
                  URL 복사
                </button>
              </div>
              <div className={classes.View_UserItem}>
                <div className={classes.View_UserDesc}>
                  <ul>
                    <li>
                      <div className={classes.View_UserBox}>
                        <AiOutlineUser />
                        <div>
                          <h1>배광태</h1>
                          <span>대표</span>
                          {isEditing && <button type="button">삭제</button>}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={classes.View_UserBox}>
                        <AiOutlineUser />
                        <div>
                          <h1>배광태</h1>
                          <span>대표</span>
                          {isEditing && <button type="button">삭제</button>}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={classes.View_UserDesc}>
                  <ul>
                    <li>
                      <div className={classes.View_UserBox}>
                        <AiOutlineUser />
                        <div>
                          <h1>배광태</h1>
                          <span>대표</span>
                          {isEditing && <button type="button">삭제</button>}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={classes.View_UserBox}>
                        <AiOutlineUser />
                        <div>
                          <h1>배광태</h1>
                          <span>대표</span>
                          {isEditing && <button type="button">삭제</button>}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.View_right}>
          <div className={classes.View_Category}>
            <ul>
              <li>
                <p>업체분류</p>
                <span>스타트업</span>
              </li>
              <li>
                <p>법인</p>
                <span>주식회사</span>
              </li>
              <li>
                <p>산업분야</p>
                <span>커뮤니티,정보,빅데이터</span>
              </li>
              <li>
                <p>위치</p>
                <span>서울특별시 강남구</span>
              </li>
              <li>
                <p>업적</p>
                <span>1년차</span>
              </li>
              <li>
                <p>홈페이지</p>
                <span>influde.com</span>
              </li>
            </ul>
          </div>
          <div className={classes.View_Text}>
            <p>
              최근 <span>5개</span>의 업체가 해당 업체에 관심을 가지고
              있습니다(최근 7일 기준)
            </p>
          </div>
          <div className={classes.View_modify}>
            <button>업체 정보 수정 요청</button>
            <button>
              <FiShare2 />
            </button>
          </div>
          <div className={classes.View_interest}>
            <button>관심등록 리스트</button>
          </div>
          <Button>제휴 신청 리스트</Button>
        </div>
      </div>
      <div className={classes.View_list}>
        <h2>추천 유사 업체</h2>
        <ul>
          <li>
            <div className={classes.View_listImg}>
              <img src={CAImage} alt="" />
            </div>
            <div className={classes.View_listInfo}>
              <ul className={classes.View_list_Tag}>
                <li>산업분야</li>
                <li>산업분야</li>
              </ul>
              <h2>업체이름</h2>
              <span>선호 파트너 형태</span>
              <ul className={classes.View_list_Hash}>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y]}
                  slidesPerView={3}
                  spaceBetween={8}
                  centeredSlides={false}
                  watchOverflow={true}
                  navigation={true} // Enable navigation
                >
                  <SwiperSlide>#tag</SwiperSlide>
                  <SwiperSlide>#tag</SwiperSlide>
                  <SwiperSlide>#tag</SwiperSlide>
                  <SwiperSlide>#tag</SwiperSlide>
                </Swiper>
              </ul>
            </div>
          </li>
          <li>
            <div className={classes.View_listImg}>
              <img src={CAImage} alt="" />
            </div>
            <div className={classes.View_listInfo}>
              <ul className={classes.View_list_Tag}>
                <li>산업분야</li>
                <li>산업분야</li>
              </ul>
              <h2>업체이름</h2>
              <span>선호 파트너 형태</span>
              <ul className={classes.View_list_Hash}>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y]}
                  slidesPerView={3}
                  spaceBetween={8}
                  centeredSlides={false}
                  watchOverflow={true}
                  navigation={true} // Enable navigation
                >
                  <SwiperSlide>#tag</SwiperSlide>
                  <SwiperSlide>#tag</SwiperSlide>
                  <SwiperSlide>#tag</SwiperSlide>
                  <SwiperSlide>#tag</SwiperSlide>
                </Swiper>
              </ul>
            </div>
          </li>
          <li>
            <div className={classes.View_listImg}>
              <img src={CAImage} alt="" />
            </div>
            <div className={classes.View_listInfo}>
              <ul className={classes.View_list_Tag}>
                <li>산업분야</li>
                <li>산업분야</li>
              </ul>
              <h2>업체이름</h2>
              <span>선호 파트너 형태</span>
              <ul className={classes.View_list_Hash}>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y]}
                  slidesPerView={3}
                  spaceBetween={8}
                  navigation={true} // Enable navigation
                >
                  <SwiperSlide>#tag</SwiperSlide>
                  <SwiperSlide>#tag</SwiperSlide>
                  <SwiperSlide>#tag</SwiperSlide>
                  <SwiperSlide>#tag</SwiperSlide>
                </Swiper>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default View;
