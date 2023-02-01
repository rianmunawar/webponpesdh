import React from "react";
import "./lembaga.css";

export const Lembaga = () => {
  return (
    <>
      <section className="mb-100" id="profil">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="lembaga-wrapper">
                <div className="card pink-bg shadow">
                  <div className="card-body">
                    <h3 className="card-title text-white">RA AR-ROHMAH</h3>
                    <p className="card-deskription text-white">
                      RA merupakan pendidikan jenjang formal pertama di Daul
                      Hikmah
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="lembaga-wrapper">
                <div className="card green-bg shadow">
                  <div className="card-body">
                    <h3 className="card-title text-white">MTs Darul Hikmah</h3>
                    <p className="card-deskription text-white">
                      MTs merupakan jenjang pendidikan tingkat SLTP yang
                      sederajat dengan SMP
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="lembaga-wrapper">
                <div className="card blue-bg shadow">
                  <div className="card-body">
                    <h3 className="card-title text-white">MAK Darul Hikmah</h3>
                    <p className="card-deskription text-white">
                      MAK merupakan jenjang pedidikan yang memadukan antara
                      pendidikan agama dan skill kejuruan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="lembaga-wrapper">
                <div className="card black-bg shadow">
                  <div className="card-body">
                    <h3 className="card-title text-white">
                      Ponpes Darul Hikmah
                    </h3>
                    <p className="card-deskription text-white">
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
