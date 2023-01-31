import React from "react";
import CtaBtn from "../../atoms/CtaBtn/CtaBtn";
import heroImg from "../../../assets/img/hero/hero-1.jpg";
import shapePurple from "../../../assets/img/hero/hero-shape-purple.png";
import "./hero.css";

export default function HeroPpdb() {
  return (
    <>
      <section
        className="banner-ppd__area pt-4 pb-5 blue-bg-3"
        style={{ marginTop: 80 }}
      >
        <div className="container">
          <div className="row align-items-center hero-wrapper">
            <div className="col-xl-6 col-lg-6 col-md-12-col-sm-12 py-4">
              <div className="hero-text">
                <h1 className="hero-title">
                  PPDB Online <br />
                  Yayasan Darul Hikmah Purwakarta
                </h1>
                <p className="herro-description">
                  Mari bergabung bersama kami membuka jalan menuju masa depan
                  yang cerah. Ayo daftar sekarang dan jadilah bagian dari
                  lingkungan pendidikan terbaik.
                </p>
                <CtaBtn
                  className="d-block mt-100"
                  classChild="e-btn"
                  label="Daftar Sekarang"
                  link="/ppdb/formulir-pendaftaran"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12-col-sm-12 py-4">
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
