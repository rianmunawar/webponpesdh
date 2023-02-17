import React from "react";
import CtaBtn from "../../atoms/CtaBtn/CtaBtn";
import heroImg from "../../../assets/img/hero/hero-1.jpg";
import "./hero.css";

export default function HeroPpdb() {
  return (
    <>
      <section
        className="banner-ppd__area pt-4 pb-5 blue-bg-3 mb-100"
        style={{ marginTop: 80 }}
        id="banner"
      >
        <div className="container">
          <div className="row align-items-center hero-wrapper">
            <div className="col-xl-6 col-lg-6 col-md-12-col-sm-12 py-4">
              <div
                className="hero-text"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h1 className="hero-title">
                  PPDB Online <br />
                  Ponpes Darul Hikmah Purwakarta
                </h1>
                <p className="herro-description">
                  Bergabunglah dengan kami di Ponpes Darul Hikmah Purwakarta dan
                  rasakan pengalaman belajar yang berbeda dan unik. Kami
                  menawarkan lingkungan belajar yang kondusif, kurikulum yang
                  holistik, dan pembinaan karakter yang berlandaskan nilai-nilai
                  Islam. Mari bersama-sama meraih masa depan gemilang.
                </p>
                <CtaBtn
                  className="d-block mt-100"
                  classChild="e-btn"
                  label="Daftar Sekarang"
                  link="/ppdb/formulir-pendaftaran"
                />
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12-col-sm-12 py-4"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="hero-thumb d-flex">
                <img src={heroImg} alt="hero" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
