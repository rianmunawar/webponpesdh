import React from "react";
import IconYellowList from "../../atoms/IconYellowList";
import Card from "../../molecules/Card";
import image1 from "../../../assets/img/blog/blog-1.jpg";
import { HashLink } from "react-router-hash-link";

const Berita = () => {
  return (
    <section className="course__area pt-115 pb-120 white-bg mt-100">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="section__title-wrapper mb-60">
              <h2 className="section__title">
                <span className="yellow-bg yellow-bg-big">
                  Informasi &amp; Berita
                  <IconYellowList />
                </span>
                <br />
                terbaru
              </h2>
              <p>Berita dan informasi terbaru untuk kamu</p>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="course__menu d-flex justify-content-lg-end mb-60">
              <div className="masonary-menu filter-button-group">
                <button>
                  <HashLink to={"/blog#berita"} className="text-disable">
                    Lihat semua...
                  </HashLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row grid">
          <div
            className="col-12 col-md-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Card
              title="Maulid Nabi Muhammad SAW"
              linkTarget="/detail"
              tag="islami"
              imgAlt="gambar"
              imgUrl={image1}
              author="admin"
              updatedAt="Juni, 12 2022"
            />
          </div>
          <div
            className="col-12 col-md-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Card
              title="Maulid Nabi Muhammad SAW"
              linkTarget="/detail"
              tag="islami"
              imgAlt="gambar"
              imgUrl={image1}
              author="admin"
              updatedAt="Juni, 12 2022"
            />
          </div>
          <div
            className="col-12 col-md-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Card
              title="Maulid Nabi Muhammad SAW"
              linkTarget="/detail"
              tag="islami"
              imgAlt="gambar"
              imgUrl={image1}
              author="admin"
              updatedAt="Juni, 12 2022"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Berita;
