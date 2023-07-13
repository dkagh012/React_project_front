import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './SwiperPage.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperPage() {
  return (
    <>
      <Swiper className={classes.Swiper_Wrap}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'fraction',
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className={classes.Swiper_Img}>Slide 1</SwiperSlide>
        <SwiperSlide className={classes.Swiper_Img}>Slide 2</SwiperSlide>
        <SwiperSlide className={classes.Swiper_Img}>Slide 3</SwiperSlide>
        <SwiperSlide className={classes.Swiper_Img}>Slide 4</SwiperSlide>
      </Swiper>
      <div className="pagination-num"></div>
    </>
  );
};
export default SwiperPage;
