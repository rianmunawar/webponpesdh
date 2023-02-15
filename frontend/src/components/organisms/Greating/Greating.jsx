import React from "react";
import { Link } from "react-router-dom";
import IconYellowList from "../../atoms/IconYellowList";
import shapeGreen from "../../../assets/img/why/why-shape-green.png";
import shapePink from "../../../assets/img/why/why-shape-pink.png";
import shapeDot from "../../../assets/img/why/why-shape-dot.png";
import shapeLine from "../../../assets/img/why/why-shape-line.png";
import img from "../../../assets/img/bapak.png";
import Styles from "./Greating.module.css";

const Greating = () => {
  return (
    <section className={`${Styles["greating-area"]} mb-100 py-5`}>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8"
            data-aos="fade-right"
          >
            <div className={`${Styles["greating__content"]} pr-50 mt-40`}>
              <div className="section__title-wrapper mb-30">
                <span className="section__sub-title">
                  Ketua YPI Darul Hikmah
                </span>
                <h2 className="section__title">
                  K.H. Drs.
                  <span className="yellow-bg yellow-bg-big">
                    Nana Suryana,
                    <IconYellowList />
                  </span>
                  MA
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  atque? Molestias odit earum dolorem natus hic modi, sint ab
                  iste nemo ipsum nobis ipsam, autem, animi doloribus aliquam
                  nostrum qui quod dignissimos adipisci! Neque molestiae, quos
                  ea consequatur, deserunt, praesentium nostrum asperiores
                  accusantium delectus exercitationem autem! Soluta molestias
                  quam accusamus modi dolorem blanditiis perspiciatis
                  reprehenderit. Iure magnam, blanditiis minima, rerum
                  temporibus odio aliquid quis aspernatur omnis voluptate
                  facilis obcaecati cumque delectus, cupiditate quasi commodi
                  repellendus enim perspiciatis officiis maxime adipisci eveniet
                  amet vero illum. Fuga commodi mollitia accusamus ea amet, eius
                  itaque dignissimos alias veritatis, sequi quo maiores ipsam
                  cum?
                </p>
              </div>
              <div className="greating__btn">
                <Link to="/detail-berita/2" className="link-btn">
                  Selanjutnya
                  <i className="far fa-arrow-right" />
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-5 col-xl-5 col-lg-6 col-md-8"
            data-aos="zoom-in"
          >
            <div className={Styles["greating-thumb"]}>
              <img
                src={img}
                alt={`ketua yayasan`}
                className={Styles["main-thumb"]}
              />
              <img
                className={Styles["greating-green"]}
                src={shapeGreen}
                alt={"element"}
              />
              <img
                className={Styles["greating-pink"]}
                src={shapePink}
                alt={"element"}
              />
              <img
                className={Styles["greating-dot"]}
                src={shapeDot}
                alt={"element"}
              />
              <img
                className={Styles["greating-line"]}
                src={shapeLine}
                alt={"element"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greating;
