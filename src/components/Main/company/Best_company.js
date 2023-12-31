import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  companiesItem,
  companiesHashTag,
  posts,
} from "../../../DATE/companyDate";
import { useSelector } from "react-redux";
import companyImg from "../../../assets/image/companyImg.png";
import ListClickPopup from "../../Main/PageEvent/ListClickPopup";
import classes from "./Best_company.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Best_company() {
  const [showPopup, setShowPopup] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleListClick = (boolean) => {
    if (boolean && !isLoggedIn) {
      setShowPopup(true); // Set the showPopup state to true when a list item is clicked
    } else {
      setShowPopup(false); // Hide the popup when showPopup is false or when the user is logged in
    }
    // if (!isLoggedIn) {
    //   setShowPopup(true); // Set the showPopup state to true when a list item is clicked
    // }
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="sectionWrap container" id="company">
      {showPopup && (
        <ListClickPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      )}

      <div className={classes.company_title}>
        <h1>인기 업체</h1>
      </div>
      <div>
        {screenWidth <= 1024 ? (
          <Swiper
            className={classes.companyItem}
            modules={[Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            spaceBetween={16}
            centeredSlides={false}
            watchOverflow={true}
            loop={true} // 무한 루프 활성화
          >
            {companiesItem.map((companyItem, index) => {
              const post = posts.find((post) => post.id === index + 1);

              return (
                <SwiperSlide
                  key={index}
                  className={classes.companyItemLink}
                  onClick={() => handleListClick(true)}
                >
                  <Link to="#">
                    <div className={classes.companyItemLinkImg}>
                      <img alt={companyItem} src={companyImg} />
                    </div>
                    <div className={classes.companyItemBody}>
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

                      {post && ( // Check if post exists
                        <div
                          id="ItemTag"
                          className={classes.companyItemLinkTag}
                        >
                          <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            slidesPerView={3}
                            spaceBetween={8}
                            centeredSlides={false}
                            watchOverflow={true}
                            navigation={true} // Enable navigation
                          >
                            {post.tags.map((tag, index) => (
                              <SwiperSlide key={index}>#{tag}</SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      )}
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <ul className={classes.companyItem}>
            {companiesItem.map((companyItem, index) => {
              const post = posts.find((post) => post.id === index + 1);

              return (
                <li
                  key={index}
                  className={classes.companyItemLink}
                  onClick={() => handleListClick(true)}
                >
                  <Link to="#">
                    <div className={classes.companyItemLinkImg}>
                      <img alt={companyItem} src={companyImg} />
                    </div>
                    <div className={classes.companyItemBody}>
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

                      {post && ( // Check if post exists
                        <div
                          id="ItemTag"
                          className={classes.companyItemLinkTag}
                        >
                          <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            slidesPerView={3}
                            spaceBetween={8}
                            centeredSlides={false}
                            watchOverflow={true}
                            navigation={true} // Enable navigation
                          >
                            {post.tags.map((tag, index) => (
                              <SwiperSlide key={index}>#{tag}</SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Best_company;
