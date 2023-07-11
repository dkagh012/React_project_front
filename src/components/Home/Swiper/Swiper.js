import React, { useEffect } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';

// Import Swiper styles
import 'swiper/css';

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination]);

const SwiperComponent = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      // Swiper configuration options
      // For example:
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    return () => {
      // Cleanup and destroy the Swiper instance when the component unmounts
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {/* Add your slides here */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>

      {/* Optional navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>

      {/* Optional pagination */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperComponent;
