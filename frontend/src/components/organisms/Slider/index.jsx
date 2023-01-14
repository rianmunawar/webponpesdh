import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <section className="carousel__area mt-80" id="carouselBanner">
      <Carousel className="carousel-inner">
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
        <Carousel.Item interval={3000} className="carousel-item">
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/699/1000/328"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Slider;
