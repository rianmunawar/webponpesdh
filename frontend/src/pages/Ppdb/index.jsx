import React from "react";
import HeroPpdb from "../../components/organisms/HeroPpdb";
import WhyUs from "../../components/organisms/WhyUs";
import Fasilitas from "../../components/organisms/Fasilitas";
import CtaBanner from "../../components/organisms/CtaBanner";
import Layouts from "../../Layout";
import { Lembaga } from "../../components/organisms/Lembaga";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import styles from "./ppdb.module.css";
import KontakForm from "../../components/organisms/KontakForm";
import CtaBtn from "../../components/atoms/CtaBtn/CtaBtn";

const Ppdb = () => {
  return (
    <>
      <Layouts>
        <HeroPpdb />
        <Lembaga />
        <WhyUs />
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
                <div className={styles.persyaratan}>
                  <h3>Pesyaratan PPDB</h3>
                  <ol>
                    <li className="text-black">
                      Pas photo (3x4) background merah 3 lembar
                    </li>
                    <li className="text-black">
                      Surat keterangan lulus asli (bagi pendaftar jenjang MTs
                      dan MAK)
                    </li>
                    <li className="text-black">
                      Surat keterangan kelakuan baik dari sekolah asal (bagi
                      pendaftar jenjang MTs dan MAK)
                    </li>
                    <li className="text-black">
                      Photo copy Ijazah 2 lembar legalisir (bagi pendaftar
                      jenjang MTs dan MAK)
                    </li>
                    <li className="text-black">
                      Photo copy SKHUN 2 lembar legalisir (bagi pendaftar
                      jenjang MTs dan MAK)
                    </li>
                    <li className="text-black">Photo copy NISN 2 lembar</li>
                    <li className="text-black">
                      Photo copy KK dan akta kelahiran
                    </li>
                  </ol>
                </div>
              </div>
              <div className="informasi-banner-wrapper mb-5">
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
        <Fasilitas />
        <section className="kontak__area mb-5" id="kontak">
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
        <CtaBanner textLink="DAFTAR" link="/ppdb/formulir-pendaftaran" />
      </Layouts>
    </>
  );
};

export default Ppdb;
