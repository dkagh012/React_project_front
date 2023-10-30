import React, { useState } from "react";
import companyImg from "../../../assets/image/companyImg.png";
import { Link } from 'react-router-dom';
import Subclasses from '../../Home/company/Best_company.module.scss';
import classes from './SearchItem.module.scss';
import { companiesItem, companiesHashTag, posts } from '../../../DATE/companyDate'; // Import data from data.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SearchItem() {
  const [activeTab, setActiveTab] = useState("recent"); // Default active tab is "recent"

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <ul className={`${Subclasses.companyItem} ${classes.SearchList}`}>
        {companiesItem.map((companyItem, index) => {
          const post = posts.find((post) => post.id === index + 1); // Find the corresponding post
          return (
            <li key={index} className={`${Subclasses.companyItemLink} ${classes.SearchListItem}`}>
              <Link to="#">
                <div className={`${Subclasses.companyItemLinkImg}  ${classes.SearchItemImage}`}>
                  <img alt={companyItem} src={companyImg}></img>
                </div>
                <div className={`${Subclasses.companyItemLinkInfo}`}>
                  <div className={Subclasses.companyItemLinkTitle}>
                    <h1>{companyItem}</h1>
                  </div>
                  <div className={Subclasses.companyItemLinkHashTag}>
                    <p>{companiesHashTag[index]}</p>
                  </div>
                  <div className={Subclasses.companyItemLinkDesc}>
                    <span> 선호 파트너 형태</span>
                  </div>
                  {post && ( // Check if post exists
                    <div id="ItemTag" className={Subclasses.companyItemLinkTag}>
                      <Swiper
                        modules={[Navigation, Scrollbar, A11y]}
                        slidesPerView={3}
                        spaceBetween={8}
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
      <div className={classes.PageNation}>
        <ul>
          <li>
            <FaAngleLeft />
          </li>
          <li><button type="button">1</button></li>
          <li><button type="button">2</button></li>
          <li><button type="button">3</button></li>
          <li><button type="button">4</button></li>
          <li><button type="button">5</button></li>
          <li>
            <FaAngleRight />
          </li>
        </ul>
      </div>
    </div>
  )
}
export default SearchItem;