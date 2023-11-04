import React, { useState } from "react";
import companyImg from "../../../assets/image/companyImg.png";
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import classes from './SearchList.module.scss';
import Subclasses from '../../Main/company/Best_company.module.scss';
import { companiesItem, companiesHashTag, posts } from '../../../DATE/companyDate'; // Import data from data.js
import SearchItem from '../SearchItem/SearchItem.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SearchList() {
  const [activeTab, setActiveTab] = useState("recent"); // Default active tab is "recent"

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="container">
      <div>
        <div className={classes.TopIntro}><span className={classes.Intro}>[광고]</span><span className={classes.Desc}>인플루드에서 추천하는 업체입니다.</span></div>
        <ul className={`${Subclasses.companyItem} ${classes.SearchList}`}>
          {companiesItem.map((companyItem, index) => {
            if (index < 3) {
              const post = posts.find((post) => post.id === index + 1); // Find the corresponding post
              return (
                <li key={index} className={Subclasses.companyItemLink}>
                  <Link to="#">
                    <div className={Subclasses.companyItemLinkImg}>
                      <img alt={companyItem} src={companyImg}></img>
                    </div>
                    <div className={`${Subclasses.companyItemLinkInfo} ${classes.SearchTopList}`}>
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
            }
            return null;
          })}
        </ul>
        <div className={classes.SearchListInputBox}>
          <input type="text" placeholder="키워드로 찾으시는 업체를 검색해 보세요"></input>
          <div className={classes.SearchBtn}>
            <BsSearch />
          </div>
        </div>
        <div className={classes.SearchItem}>
          <ul className={classes.ItemTab}>
            <li>
              <button
                className={activeTab === "recent" ? classes.active : ""}
                onClick={() => handleTabClick("recent")}
              >
                최신순
              </button>
            </li>
            <li>
              <button
                className={activeTab === "popular" ? classes.active : ""}
                onClick={() => handleTabClick("popular")}
              >
                인기순
              </button>
            </li>
          </ul>
        </div>
        <SearchItem />
      </div>
    </section>
  )
}
export default SearchList;