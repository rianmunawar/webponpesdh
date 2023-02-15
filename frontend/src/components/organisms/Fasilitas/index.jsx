import React from "react";
import IconYellowList from "../../atoms/IconYellowList";
import "./fasilitas.css";

export default function Fasilitas() {
  return (
    <>
      <section className="fasilitas__area mb-100 p-5" id="fasilitas">
        <div className="container">
          <div className="row">
            <div className="text-wrapper text-center">
              <h2 className="section__title">
                <span className="yellow-bg yellow-bg-big">
                  Fasilitas
                  <IconYellowList />
                </span>
              </h2>
              <p className="text-black">
                Pembelajaran yang inteaktif dan berkualitas didukung dengan
                fasilitas yang lengkap
              </p>
            </div>
          </div>
          <div className="row justify-content-center g-2">
            <div
              className="fasilitas-item col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="image-gallery">
                <img src="https://unsplash.it/1200/768.jpg?image=271" alt="" />
              </div>
              <div className="fasilitas-item-text">
                <div className="fasilitas-item-title green-bg text-center">
                  <h4 className="text-white mt-3">Masjid Raudhatul Jannah</h4>
                </div>
              </div>
            </div>
            <div
              className="fasilitas-item col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="image-gallery">
                <img src="https://unsplash.it/1200/768.jpg?image=271" alt="" />
              </div>
              <div className="fasilitas-item-text">
                <div className="fasilitas-item-title green-bg text-center">
                  <h4 className="text-white mt-3">Lapangan Olahraga</h4>
                </div>
              </div>
            </div>
            <div
              className="fasilitas-item col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="image-gallery">
                <img src="https://unsplash.it/1200/768.jpg?image=271" alt="" />
              </div>
              <div className="fasilitas-item-text">
                <div className="fasilitas-item-title green-bg text-center">
                  <h4 className="text-white mt-3">Ruang Kelas Nyaman</h4>
                </div>
              </div>
            </div>
            <div
              className="fasilitas-item col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="image-gallery">
                <img src="https://unsplash.it/1200/768.jpg?image=271" alt="" />
              </div>
              <div className="fasilitas-item-text">
                <div className="fasilitas-item-title green-bg text-center">
                  <h4 className="text-white mt-3">Kantin</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
