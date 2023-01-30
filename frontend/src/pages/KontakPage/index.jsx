import React from "react";
import IconYellowList from "../../components/atoms/IconYellowList";
import BannerPage from "../../components/molecules/BannerPage";
import KontakForm from "../../components/organisms/KontakForm";
import KontakInfo from "../../components/organisms/KontakInfo";
import Layouts from "../../Layout";
import kontakShape1 from "../../assets/img/contact/contact-shape-1.png";
import kontakShape2 from "../../assets/img/contact/contact-shape-2.png";
import kontakShape3 from "../../assets/img/contact/contact-shape-3.png";

const KontakPage = () => {
  return (
    <Layouts>
      <BannerPage title="Kontak" />
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="section__title">
                    Get in
                    <span className="yellow-bg yellow-bg-big">
                      touch
                      <IconYellowList />
                    </span>
                  </h2>
                  <p>
                    Ada pertanyaan? atau hanya sekedar menyapa. kami disini
                    dengan senang hati menanggapi pesan anda
                  </p>
                </div>
                <KontakForm />
              </div>
            </div>
            <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="contact__info white-bg p-relative z-index-1">
                <div className="contact__shape">
                  <img
                    className="contact-shape-1"
                    src={kontakShape1}
                    alt="shape artist"
                  />
                  <img
                    className="contact-shape-2"
                    src={kontakShape2}
                    alt="shape artist"
                  />
                  <img
                    className="contact-shape-3"
                    src={kontakShape3}
                    alt="shape artist"
                  />
                </div>
                <KontakInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default KontakPage;
