import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companies, companiesItem, companiesHashTag, posts } from '../../../DATE/companyDate';
import { useSelector } from 'react-redux';
import companyImg from "../../../assets/image/companyImg.png";
import ListClickPopup from '../../PageEvent/ListClickPopup';
import classes from './Best_company.module.scss';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Swiper_Tag.scss';


function Best_company() {
  const [swiperInstances, setSwiperInstances] = useState([]);

  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [showPopup, setShowPopup] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const goNext = (index) => {
    if (swiperInstances[index]) {
      swiperInstances[index].slideNext();
    }
    console.log(swiperInstances[index]);

  };

  const goPrev = (index) => {
    if (swiperInstances[index]) {
      swiperInstances[index].slidePrev();
    }
    console.log(swiperInstances[index]);

  };

  const handleClick = (company) => {
    setSelectedCompany(company);
  };

  const handleListClick = (index) => {
    if (isLoggedIn) {
      setShowPopup(true);
    } else {
      // 로그인되지 않았을 때 companyItem을 클릭했을 때의 처리를 여기에 추가할 수 있습니다.
      // 예를 들어, 로그인 페이지로 이동하거나 다른 작업을 구현할 수 있습니다.
    }
  };

  // useEffect 내에서 상태 업데이트로 변경합니다.
  useEffect(() => {
    // Swiper 인스턴스를 업데이트하는 논리를 여기에 추가합니다.
  }, [swiperInstances]);

  return (
    <section className="sectionWrap container" id="company">
      <ListClickPopup showPopup={showPopup} setShowPopup={setShowPopup} />

      <div className={classes.company_title}>
        <h1>인기 업체</h1>
      </div>
      <ul className={classes.companyList}>
        {companies.map((company, index) => (
          <li key={index}>
            <button
              className={company === selectedCompany ? `${classes.clicked}` : ''}
              type="button"
              onClick={() => handleClick(company)}
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

            const swiperRef = React.createRef();

            return (
              <li key={index} className={classes.companyItemLink} onClick={() => handleListClick(index)}>
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
                    <button
                      className={classes.SwiperBtn}
                      onClick={() => goPrev(index)}
                      style={{ display: swiperInstances[index] && !swiperInstances[index].isBeginning ? 'block' : 'none' }}
                    >
                      <FaChevronLeft />
                    </button>
                    <Swiper
                      ref={swiperRef}
                      className={classes.Swiper_Wrap}
                      modules={[Navigation, Pagination, A11y, Autoplay]}
                      slidesPerView={3}
                      navigation
                      onSwiper={(swiper) => setSwiperInstances((prevInstances) => {
                        const updatedInstances = [...prevInstances];
                        updatedInstances[index] = swiper;
                        return updatedInstances;
                      })}
                    >
                      <SwiperSlide className={classes.Swiper_Img}><span>Slide 1</span></SwiperSlide>
                      <SwiperSlide className={classes.Swiper_Img}><span>Slide 2</span></SwiperSlide>
                      <SwiperSlide className={classes.Swiper_Img}><span>Slide 3</span></SwiperSlide>
                      <SwiperSlide className={classes.Swiper_Img}><span>Slide 4</span></SwiperSlide>
                    </Swiper>
                    <button
                      className={classes.SwiperBtn}
                      onClick={() => goNext(index)}
                      style={{ display: swiperInstances[index] && !swiperInstances[index].isEnd ? 'block' : 'none' }}
                    >
                      <FaChevronRight />
                    </button>
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
