import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companies, companiesItem, companiesHashTag, posts } from '../../../DATE/companyDate';
import { useSelector } from 'react-redux';
import companyImg from "../../../assets/image/companyImg.png";
import ListClickPopup from '../../PageEvent/ListClickPopup';
import classes from './Best_company.module.scss';

import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Best_company() {
  // Swiper 기능

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.autoplay.start();
    }
  }, [swiper]);



  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  // 랜더링 기능
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
                      className={classes.Swiper_Wrap}
                      modules={[Navigation, Pagination, A11y, Autoplay]}
                      navigation
                      onSwiper={setSwiper}
                    >
                      <SwiperSlide className={classes.Swiper_Img}>Slide 1</SwiperSlide>
                      <SwiperSlide className={classes.Swiper_Img}>Slide 2</SwiperSlide>
                      <SwiperSlide className={classes.Swiper_Img}>Slide 3</SwiperSlide>
                      <SwiperSlide className={classes.Swiper_Img}>Slide 4</SwiperSlide>
                    </Swiper>
                    <div className={classes.Swiper_Buttons}>
                      <button className={classes.SwiperBtn} onClick={goPrev}>
                        <FaChevronLeft />
                      </button>
                      <button className={classes.SwiperBtn} onClick={goNext}>
                        <FaChevronRight />
                      </button>
                    </div>
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
