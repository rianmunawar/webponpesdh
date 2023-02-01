import React from "react";
import HeroPpdb from "../../components/organisms/HeroPpdb";
import WhyUs from "../../components/organisms/WhyUs";
import Fasilitas from "../../components/organisms/Fasilitas";
import Layouts from "../../Layout";
import { Lembaga } from "../../components/organisms/Lembaga";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import KontakForm from "../../components/organisms/KontakForm";

const Ppdb = () => {
  return (
    <>
      <Layouts>
        <HeroPpdb />
        <Lembaga />
        <WhyUs />
        <section className="mb-100" id="informasi">
          <div className="container">
            <div className="informasi-wrapper py-5">
              <div className="informasi-text-wrapper">
                <h2 className="section__title">Informasi PPDB</h2>
                <p>
                  Telah dibuka{" "}
                  <strong className="text-black">
                    PPDB Yayasan Darul Hikmah TA. 2023/2024
                  </strong>{" "}
                  semua jenjang
                </p>
              </div>
              <div className="informasi-banner-wrapper mt-5">
                <Swiper
                  modules={[EffectFlip, Navigation]}
                  navigation
                  slidesPerView={"1"}
                  effect={"flip"}
                >
                  <SwiperSlide>Brosur PPDB</SwiperSlide>
                  <SwiperSlide>Brosur PPDB</SwiperSlide>
                  <SwiperSlide>Brosur PPDB</SwiperSlide>
                  <div className="swiper-pagination"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <Fasilitas />
        <section className="kontak__area" id="kontak">
          <div className="container">
            <div className="kontak-text-wrapper">
              <h2 className="section__title">Kontak</h2>
              <p>
                Jika ada kendala atau mau bertanya, silahkan hubungi CS kami
              </p>
            </div>
            <KontakForm />
          </div>
        </section>
      </Layouts>
    </>
  );
};

export default Ppdb;
