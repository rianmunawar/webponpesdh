import React from "react";
import LazyImage from "../../components/atoms/LazyImage";
import CtaBtn from "../../components/atoms/CtaBtn/CtaBtn";
import brosur1 from "../../assets/img/brosur-ppdb/brosur-1.png";
import brosur2 from "../../assets/img/brosur-ppdb/brosur-2.png";
import brosur3 from "../../assets/img/brosur-ppdb/brosur-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Controller } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import Styles from "./ppdb.module.css";

function SliderPpdb() {
  return (
    <section
      className="mb-100"
      id="informasi"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="container">
        <div className="informasi-wrapper py-5 mb-50">
          <div className="informasi-text-wrapper mb-5">
            <h2 className="section__title">Informasi PPDB</h2>
            <p style={{ fontSize: "1.3rem", lineHeight: "50px" }}>
              Telah dibuka{" "}
              <strong className="text-black">
                PPDB Ponpes Darul Hikmah TA. 2023/2024
              </strong>{" "}
              semua jenjang
            </p>
            <div className={Styles.persyaratan}>
              <h3>Pesyaratan Umum</h3>
              <ol>
                <li className="text-black">
                  Pas photo (3x4) background merah 3 lembar
                </li>
                <li className="text-black">
                  Surat keterangan lulus asli (bagi pendaftar jenjang MTs dan
                  MAK)
                </li>
                <li className="text-black">
                  Surat keterangan kelakuan baik dari sekolah asal (bagi
                  pendaftar jenjang MTs dan MAK)
                </li>
                <li className="text-black">
                  Photo copy Ijazah 2 lembar legalisir (bagi pendaftar jenjang
                  MTs dan MAK)
                </li>
                <li className="text-black">
                  Photo copy SKHUN 2 lembar legalisir (bagi pendaftar jenjang
                  MTs dan MAK)
                </li>
                <li className="text-black">Photo copy NISN 2 lembar</li>
                <li className="text-black">Photo copy KK dan akta kelahiran</li>
              </ol>
            </div>
          </div>
          <div className="informasi-banner-wrapper mb-5">
            <Swiper
              modules={[Navigation, Scrollbar, Controller]}
              autoplay={{ delay: 2000, disableOnInteraction: true }}
              fadeEffect={{ crossFade: true }}
              creativeEffect={{}}
              navigation
              slidesPerView={"1"}
              controller={{ inverse: true }}
              scrollbar={{
                draggable: true,
                el: `.swiper-scrollbar`,
                hide: false,
              }}
              className={Styles.swiper}
            >
              <SwiperSlide className={Styles["swiper-slider"]}>
                <LazyImage src={brosur1} alt={"brosur ppdb 2023"} />
              </SwiperSlide>
              <SwiperSlide className={Styles["swiper-slider"]}>
                <LazyImage src={brosur2} alt={"brosur ppdb 2023"} />
              </SwiperSlide>
              <SwiperSlide className={Styles["swiper-slider"]}>
                <LazyImage src={brosur3} alt={"brosur ppdb 2023"} />
              </SwiperSlide>
              <div
                className={`swiper-scrollbar ${Styles["swiper-scrollbar"]}`}
              ></div>
            </Swiper>
          </div>
        </div>
        <div className="cta-wrapper d-flex justify-content-center">
          <CtaBtn
            className="d-block"
            classChild="e-btn"
            label="Daftar Sekarang"
            link="/ppdb/formulir-pendaftaran"
          />
        </div>
      </div>
    </section>
  );
}

export default SliderPpdb;
