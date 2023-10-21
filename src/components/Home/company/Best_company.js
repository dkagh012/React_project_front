import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import companyImg from "../../../assets/image/companyImg.png";
import classes from './Best_company.module.scss';
import { companies, companiesItem, companiesHashTag, posts } from '../../../DATE/companyDate';
import ListClickPopup from '../../PageEvent/ListClickPopup';
import { useSelector } from 'react-redux';
import SwiperCore, { Navigation } from 'swiper'; // 패키지 경로를 확인하십시오

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Swiper_Tag.css';

SwiperCore.use([Navigation]);

function Best_company() {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [showPopup, setShowPopup] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const swiperRef = useRef(null); // Ref for Swiper instance

  const handleClick = (company) => {
    setSelectedCompany(company);
  };

  const handleListClick = () => {
    if (isLoggedIn) {
      setShowPopup(true);
    } else {
      // Handle what to do when not logged in and companyItem is clicked
      // For example, you can navigate to the login page or implement another action.
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="sectionWrap container">
      <ListClickPopup showPopup={showPopup} setShowPopup={setShowPopup} />

      <div className={classes.company_title}>
        <h1>인기 업체</h1>
      </div>
      <ul className={classes.companyList}>
        {companies.map((company, index) => (
          <li key={index}>
            <button
              className={company === selectedCompany ? `${classes.clicked}` : ''}
              type="button" onClick={() => handleClick(company)}
            >
              {company}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <ul className={classes.companyItem}>
          {companiesItem.map((companyItem, index) => {
            const post = posts.find((post) => post.id === index + 1);
            return (
              <li key={index} className={classes.companyItemLink} onClick={() => handleListClick()}>
                <Link to="#">
                  <div className={classes.companyItemLinkImg}>
                    <img alt={companyItem} src={companyImg} />
                  </div>
                  <div className={classes.companyItemLinkInfo}>
                    <div className={classes.companyItemLinkTitle}>
                      <h1>{companyItem}</h1>
                    </div>
                    <div className={classes.companyItemLinkHashTag}>
                      <p>{companiesHashTag[index]}</p>
                    </div>
                    <div className={classes.companyItemLinkDesc}>
                      <span> 선호 파트너 형태</span>
                    </div>
                  </div>
                  <div className={classes.companyItemLinkTag}>
                    <Swiper
                      ref={swiperRef}
                      navigation={{
                        prevEl: '.prev-button',
                        nextEl: '.next-button',
                      }}
                      spaceBetween={50}
                      slidesPerView={3}
                    >
                      <SwiperSlide className="blue-slide">Slide 1</SwiperSlide>
                      <SwiperSlide className="yellow-slide">Slide 2</SwiperSlide>
                      <SwiperSlide className="green-slide">Slide 3</SwiperSlide>
                    </Swiper>
                    <div className="prev-button" onClick={slidePrev}>Prev</div>
                    <div className="next-button" onClick={slideNext}>Next</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Best_company;
