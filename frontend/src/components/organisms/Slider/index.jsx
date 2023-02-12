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
import imgSlider from "../../../assets/img/slider/slider-1.jpg";

const Slider = () => {
  return (
    <section className="carousel__area mt-100" id="carouselBanner">
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
        // className="carousel-inner"
      >
        {/* <SwiperSlide className="carousel-item d-block">
          <img src={imgSlider} alt="image" />
        </SwiperSlide>
        <SwiperSlide className="carousel-item d-block">
          <img src={imgSlider1} alt="image" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={imgSlider} alt="image" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgSlider} alt="image" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgSlider} alt="image" className="w-100" />
        </SwiperSlide>
        <div className={styles["swiper-pagination"]}></div>
        <div className="pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      {/* <Carousel className="carousel-inner overflow-hidden">
        <Carousel.Item interval={3000} className="carousel-item">
          <img className="d-block w-100" src={imgSlider} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000} className="carousel-item">
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/699/1000/328"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000} className="carousel-item">
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/699/1000/328"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel> */}
    </section>
  );
};

export default Slider;
