import React from "react";
import styles from "./lembaga.module.css";
import homeIcon from "../../../assets/svg/home.svg";

export const Lembaga = () => {
  return (
    <>
      <section className="mb-100" id="profil">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="section__title mb-5">
              Lembaga & Jenjang pendidikan
            </h3>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="lembaga-wrapper">
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
                    <h3 className="card-title ">Ponpes Darul Hikmah</h3>
                    <p className="card-deskription ">
                      Lembaga pendidikan terbaik untuk membentuk generasi yang
                      berakhlakuk karimah, berwawasan agama, Berjiwa nasionalis
                      dan kompeten dalam pengetahuan umum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                      Lembaga pendidikan pra-sekolah (setara dengan TK) berbasis
                      Islami yang menyediakan pengalaman belajar menyenangkan
                      dan efektif bagi anak usia dini.
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
                      Lembaga pendidikan menengah berbasis Islam yang
                      menyediakan kurikulum berkualitas dan fasilitas terbaik
                      untuk membentuk siswa-siswa yang berkarakter dan
                      berwawasan luas.
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
                    <h3 className="card-title ">MAK Darul Hikmah</h3>
                    <p className="card-deskription ">
                      Pendidikan menengah atas berbasis Islam dan dilengkapi
                      dengan kurikulum kejuruan (Setara SMK), mencetak siswa
                      yang berkarakter unggul serta memiliki skill untuk
                      menunjang masa depan
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
