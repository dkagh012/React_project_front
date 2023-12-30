import React, { useState } from "react";
import classes from "./BusinessPartnershipList.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BsSearch } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Image from "../../assets/image/companyImg.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Button from "../UI/Button/Button";

function BusinessPartnershipList() {
  const [AcceptAction, setAcceptAction] = useState(false);
  const [IntroAction, setIntroAction] = useState(false);

  function handleListOpen(element) {
    element((prev) => !prev);
  }
  return (
    <div>
      <Header />
      <main className="container">
        <h2 className={classes.Title}>[인플루드]제휴 신청 리스트</h2>
        <div id="BusinessSearch">
          <div className={classes.SearchListInputBox}>
            <input
              type="text"
              placeholder="키워드로 찾으시는 업체를 검색해 보세요"
            ></input>
            <div className={classes.SearchBtn}>
              <BsSearch />
            </div>
          </div>
        </div>
        <div id="BusinessList" className={classes.BusinessList}>
          {AcceptAction && (
            <div className={classes.BusinessListPopup}>
              <div className={classes.BusinessListPopupBackground}></div>
              <div className={classes.BusinessListPopupBox}>
                <div>
                  <h1>해당 업체에 제휴 요청을 수락하시겠습니까?</h1>
                  <p>제휴 요청 수락을 하는 경우 제휴 채팅이 시작됩니다.</p>
                </div>
                <div className={classes.BusinessPopupBtn}>
                  <button
                    type="button"
                    onClick={() => handleListOpen(setAcceptAction)}
                  >
                    취소
                  </button>
                  <button type="button">확인</button>
                </div>
              </div>
            </div>
          )}
          {IntroAction && (
            <div className={classes.BusinessManual}>
              <div className={classes.BusinessManualBackground}></div>
              <div className={classes.BusinessManualBox}>
                <div className={classes.BusinessManualTop}>
                  <button
                    type="button"
                    onClick={() => handleListOpen(setIntroAction)}
                  >
                    <IoClose />
                  </button>
                </div>
                <div className={classes.BusinessManualBody}>
                  <div className={classes.BusinessManualDesc}>
                    <img className={classes.BusinessImg} src={Image} alt="" />
                    <div>
                      <h1>업체명</h1>
                      <p>동네기반무슨이야깅가이엇어</p>
                    </div>
                  </div>
                  <div className={classes.BusinessManualIntro}>
                    <h1>제안 내용</h1>
                    <textarea type="text" />
                  </div>
                  <div className={classes.BusinessManualIntro}>
                    <h1>협력 방식</h1>
                    <textarea type="text" />
                  </div>
                  <Button type="button">제휴 요청 수락</Button>
                </div>
              </div>
            </div>
          )}
          <ul className={classes.BusinessItemList}>
            <li>
              <img className={classes.BusinessImg} src={Image} alt=""></img>
              <div className={classes.BusinessDesc}>
                <p>브랜드 이름</p>
                <span>
                  동네 기반 O2O 육아 커뮤니티 및 육아친구 매칭 플랫폼 -
                  '육아크루' 
                </span>
              </div>
              <div className={classes.BusinessIntro}>
                <p>
                  텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스
                </p>
              </div>
              <div className={classes.BusinessBtn}>
                <button
                  type="button"
                  onClick={() => handleListOpen(setAcceptAction)}
                >
                  제휴 요청 수락
                </button>
                <button
                  type="button"
                  onClick={() => handleListOpen(setIntroAction)}
                >
                  제휴 요청 정보
                </button>
              </div>
            </li>
          </ul>
          <div className={classes.PageNation}>
            <ul>
              <li>
                <button type="button">
                  <FaAngleLeft />
                </button>
              </li>
              <li>
                <button className={classes.Clicked} type="button">
                  1
                </button>
              </li>
              <li>
                <button type="button">2</button>
              </li>
              <li>
                <button type="button">3</button>
              </li>
              <li>
                <button type="button">4</button>
              </li>
              <li>
                <button type="button">5</button>
              </li>
              <li>
                <button type="button">
                  <FaAngleRight />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BusinessPartnershipList;
