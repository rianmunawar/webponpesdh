import React from "react";
import shapeCta from "../../../assets/img/cta/cta-shape.png";

const CtaBanner = (props) => {
  return (
    <section className="cta__area mb--120">
      <div className="container">
        <div className="cta__inner green-bg fix">
          <div className="cta__shape">
            <img src={shapeCta} alt={"shape-cta"} />
          </div>
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-8">
              <div className="cta__content">
                <h3 className="cta__title">
                  PPDB Ponpes Darul Hikmah 2023/2024
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-4 col-md-4">
              <div className="cta__more d-md-flex justify-content-end p-relative z-index-1">
                <a href={props.link} className="e-btn e-btn-white">
                  {props.textLink}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
