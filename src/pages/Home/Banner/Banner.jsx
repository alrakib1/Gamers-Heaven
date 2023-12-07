// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles

import "swiper/css";

// must import autoplay css

import "swiper/css/autoplay";

// must import autoplay from modules

import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co/J25WTKP/4c3f95119443737-609d6a740d9e3.jpg"
            className="w-full lg:h-[500px] "
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co/PDSQstM/tour-article-banner-2000x800.png"
            className="w-full lg:h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co/bsV9xnX/csgo-tournaments.jpg"
            className="w-full lg:h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co/Y00JXfT/league-of-legends-tournaments.jpg"
            className="w-full lg:h-[500px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
