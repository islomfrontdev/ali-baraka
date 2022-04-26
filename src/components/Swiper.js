import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

export default function SwiperCom() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          type: "progressbar",
        }}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/logos_microsoft.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos_google.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos_slack.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos_wordpress.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos_microsoft.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos_google.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos_slack.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos_wordpress.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
