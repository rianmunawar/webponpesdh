import React from 'react';
import shapeCta from '../../../assets/img/cta/cta-shape.png';

const CtaBanner = () => {
  return (
    <section className="cta__area mb--120">
      <div className="container">
        <div className="cta__inner blue-bg fix">
          <div className="cta__shape">
            <img src={shapeCta} alt />
          </div>
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-8">
              <div className="cta__content">
                <h3 className="cta__title">
                  Lihat detail informasi PSB Ponpes Darul Hikmah
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-4 col-md-4">
              <div className="cta__more d-md-flex justify-content-end p-relative z-index-1">
                <a href="contact.html" className="e-btn e-btn-white">
                  Informasi
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
