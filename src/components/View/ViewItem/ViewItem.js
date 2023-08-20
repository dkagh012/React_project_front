import classes from './ViewItem.module.scss';
import React from "react";
import Image from '../../../assets/image/logo.png';
import CAImage from '../../../assets/image/companyImg.png';
import Button from "../../UI/Button/Button";
import { FiShare2 } from "react-icons/fi";
function View() {
  return (
    <section className="container">
      <h2 className={classes.title}>인플루드 (INFLUDE)</h2>
      <div className={classes.View_wrap}>
        <div className={classes.View_left}>
          <div className={classes.View_card}>
            <div className={classes.View_Title}>
              <div className={classes.View_Img}><img src={Image} alt=""></img></div>
              <div className={classes.View_Info}>
                <h2>인플루드</h2>
                <span>서비스 간단 소개다</span>
                <ul className={classes.ViewHash}>
                  <li>#커뮤니티</li>
                  <li>#커뮤니티</li>
                  <li>#커뮤니티</li>
                </ul>
              </div>
            </div>
            <div className={classes.View_Info}>
              <p>
                <span className={classes.on}>
                  여기는 기업의 소개가 들어갈거여 여기는 기업의 소개가 들어갈거여 여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기

                  여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의
                </span>
                <button>더 보기</button>
              </p>
              <ul>
                <li><img src={CAImage} alt=""></img></li>
                <li><img src={CAImage} alt=""></img></li>
                <li><img src={CAImage} alt=""></img></li>
                <li><img src={CAImage} alt=""></img></li>
              </ul>
            </div>
            <div className={classes.View_Desc}>
              <h2 className={classes.title}>선호 제휴 업체</h2>
              <div>
                <span>저희는 이런 업체를 선호합니다 해당 업체가 아니더라도 연락을 주세요저희는 이런 업체를 선호합니다 해당 업체가 아니더라도 연락을 주세요저희는 이런 업체를 선호합니다 해당 업체가 아니더라도 연락을 주세요저희는 이런 업체를 선호합니다 해당 업체가 아니더라도 연락을 주세요저희는 이런 업체를 선호합니다 해당 업체가 아니더라도 연락을 주세요체가 아니더라도 연락을 주세</span>
                <ul className={classes.ViewHash}>
                  <li>#커머스</li>
                  <li>#커머스</li>
                  <li>#커머스</li>
                  <li>#커머스</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className={classes.View_right}>
          <div className={classes.View_Category}>
            <ul >
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
            <p>최근 <span>5개</span>의 업체가 해당 업체에 관심을 가지고 있습니다(최근 7일 기준)</p>
          </div>
          <div className={classes.View_interest}>
            <button>관심등록</button>
            <button><FiShare2 /></button>
          </div>
          <Button>제휴신청</Button>
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
                <li>#태그</li>
                <li>#태그</li>
                <li>#태그</li>
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
                <li>#태그</li>
                <li>#태그</li>
                <li>#태그</li>
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
                <li>#태그</li>
                <li>#태그</li>
                <li>#태그</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default View;