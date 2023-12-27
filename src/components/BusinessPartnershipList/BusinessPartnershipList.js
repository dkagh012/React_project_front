import React from "react";
import classes from "./BusinessPartnershipList.module.scss";
import Footer from "../Footer/Footer";
import { BsSearch } from "react-icons/bs";
import Header from "../Header/Header";
import Image from "../../assets/image/companyImg.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function BusinessPartnershipList() {
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
                <button type="button">제휴 요청 수락</button>
                <button type="button">제휴 요청 정보</button>
              </div>
            </li>
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
                <button type="button">제휴 요청 수락</button>
                <button type="button">제휴 요청 정보</button>
              </div>
            </li>
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
                <button type="button">제휴 요청 수락</button>
                <button type="button">제휴 요청 정보</button>
              </div>
            </li>
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
                <button type="button">제휴 요청 수락</button>
                <button type="button">제휴 요청 정보</button>
              </div>
            </li>
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
                <button type="button">제휴 요청 수락</button>
                <button type="button">제휴 요청 정보</button>
              </div>
            </li>
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
                <button type="button">제휴 요청 수락</button>
                <button type="button">제휴 요청 정보</button>
              </div>
            </li>
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
                <button type="button">제휴 요청 수락</button>
                <button type="button">제휴 요청 정보</button>
              </div>
            </li>
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
                <button type="button">제휴 요청 수락</button>
                <button type="button">제휴 요청 정보</button>
              </div>
            </li>
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
                <button type="button">제휴 요청 수락</button>
                <button type="button">제휴 요청 정보</button>
              </div>
            </li>
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
                <button type="button">제휴 요청 수락</button>
                <button type="button">제휴 요청 정보</button>
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
