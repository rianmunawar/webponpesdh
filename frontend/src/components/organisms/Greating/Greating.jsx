import React from 'react';

const Greating = () => {
  return (
    <section className="why__area pt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
            <div className="why__content pr-50 mt-40">
              <div className="section__title-wrapper mb-30">
                <span className="section__sub-title">
                  Ketua YPI Darul Hikmah
                </span>
                <h2 className="section__title">
                  K.H. Drs.
                  <span className="yellow-bg yellow-bg-big">
                    Nana Suryana
                    <img src="assets/img/shape/yellow-bg.png" alt />
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
              <div className="why__btn">
                <a href="about.html" className="link-btn">
                  Selanjutnya
                  <i className="far fa-arrow-right" />
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
            <div className="why__thumb">
              <img src="assets/img/why/why.png" alt />
              <img
                className="why-green"
                src="assets/img/why/why-shape-green.png"
                alt
              />
              <img
                className="why-pink"
                src="assets/img/why/why-shape-pink.png"
                alt
              />
              <img
                className="why-dot"
                src="assets/img/why/why-shape-dot.png"
                alt
              />
              <img
                className="why-line"
                src="assets/img/why/why-shape-line.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greating;
