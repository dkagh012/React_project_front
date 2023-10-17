import React, { useState } from "react";
import { Link } from 'react-router-dom';
import companyImg from "../../../assets/image/companyImg.png";
import classes from './Best_company.module.scss';
import { companies, companiesItem, companiesHashTag, posts } from '../../../DATE/companyDate';
import ListClickPopup from '../../PageEvent/ListClickPopup';
import { useSelector } from 'react-redux';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

function Best_company() {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [showPopup, setShowPopup] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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
                      modules={[Navigation, A11y]}
                      spaceBetween={50}
                      slidesPerView={3}
                      navigation={{
                        prevEl: '.prev-button',
                        nextEl: '.next-button',
                      }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                    >
                      <div>
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                      </div>
                      <div>
                        <div className="next-button" onClick={() => Swiper.slideNext()}>Next</div>
                        <div className="prev-button" onClick={() => Swiper.slidePrev()}>Prev</div>
                      </div>
                    </Swiper>
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
