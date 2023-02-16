import React from "react";
import styles from "./lembaga.module.css";
import homeIcon from "../../../assets/svg/home.svg";

export const Lembaga = () => {
  return (
    <>
      <section className="mb-100" id="profil">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="section__title mb-5">Jenjang pendidikan</h3>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className={styles["lembaga-wrapper"]}>
                <div
                  className={`card shadow ${styles["customize"]}`}
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <img
                    src={homeIcon}
                    alt="icon"
                    className={`card-img-top ${styles["image"]}`}
                  />
                  <div className="card-body">
                    <h3 className="card-title ">RA AR-ROHMAH</h3>
                    <p className="card-deskription ">
                      RA merupakan pendidikan jenjang formal pertama di Daul
                      Hikmah
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="lembaga-wrapper">
                <div
                  className={`card shadow ${styles["customize"]}`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src={homeIcon}
                    alt="icon"
                    className={`card-img-top ${styles["image"]}`}
                  />
                  <div className="card-body">
                    <h3 className="card-title ">MTs Darul Hikmah</h3>
                    <p className="card-deskription ">
                      MTs merupakan jenjang pendidikan tingkat SLTP yang
                      sederajat dengan SMP
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="lembaga-wrapper">
                <div
                  className={`card shadow ${styles["customize"]}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <img
                    src={homeIcon}
                    alt="icon"
                    className={`card-img-top ${styles["image"]}`}
                  />
                  <div className="card-body">
                    <h3 className="card-title ">MAK Darul Hikmah</h3>
                    <p className="card-deskription ">
                      MAK merupakan jenjang pedidikan yang memadukan antara
                      pendidikan agama dan skill kejuruan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="lembaga-wrapper">
                <div
                  className={`card shadow ${styles["customize"]}`}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <img
                    src={homeIcon}
                    alt="icon"
                    className={`card-img-top ${styles["image"]}`}
                  />
                  <div className="card-body">
                    <h3 className="card-title ">Ponpes Darul Hikmah</h3>
                    <p className="card-deskription ">
                      Lembaga pendidikan terbaik untuk membentuk generasi yang
                      berakhlakuk karimah, berwawasan agama, dan kompeten dalam
                      bidang science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
