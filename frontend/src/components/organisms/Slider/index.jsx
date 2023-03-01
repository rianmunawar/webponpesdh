import React from "react";
// Import Swiper React components
import {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./slider.css";
import banner1 from "../../../assets/img/hero/hero-img-lg.png";
import brosur1 from "../../../assets/img/brosur-ppdb/brosur-1.png";
import brosur2 from "../../../assets/img/brosur-ppdb/brosur-2.png";
import brosur3 from "../../../assets/img/brosur-ppdb/brosur-3.png";
import LazyImage from "../../atoms/LazyImage";

const Slider = () => {
  return (
    <section className="hero__area mt-100">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectFade,
          EffectCoverflow,
        ]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          el: ".pagination",
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        slidesPerView={1}
        className="d-none d-md-block"
      >
        <SwiperSlide>
          <LazyImage src={banner1} alt="image" width={"100%"} height={"100%"} />
        </SwiperSlide>
        <div className={styles["swiper-pagination"]}></div>
        <div className="pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      {/* Swiper mobile */}
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectFade,
          EffectCoverflow,
        ]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        slidesPerView={1}
        className="d-block d-md-none"
      >
        <SwiperSlide>
          <LazyImage src={brosur1} alt="image" width={"100%"} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <LazyImage src={brosur2} alt="image" width={"100%"} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <LazyImage src={brosur3} alt="image" width={"100%"} height={"100%"} />
        </SwiperSlide>
        {/* <div className={styles["swiper-pagination"]}></div> */}
        <div className="pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};

export default Slider;
