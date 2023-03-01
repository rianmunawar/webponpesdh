import React, { lazy, Suspense } from "react";
import HeroPpdb from "../../components/organisms/HeroPpdb";
import WhyUs from "../../components/organisms/WhyUs";
import Fasilitas from "../../components/organisms/Fasilitas";
import CtaBanner from "../../components/organisms/CtaBanner";
import KontakForm from "../../components/organisms/KontakForm";
import Layouts from "../../Layout";
import { Lembaga } from "../../components/organisms/Lembaga";
import SliderPpdb from "./SliderPpdb";
// Import Swiper styles

const Ppdb = () => {
  return (
    <>
      <Layouts>
        <HeroPpdb />
        <Lembaga />
        <WhyUs />
        <SliderPpdb />
        <Fasilitas />
        <section className="kontak__area mb-5" id="kontak">
          <div className="container">
            <div className="kontak-text-wrapper">
              <h2 className="section__title">Kontak</h2>
              <p>
                Jika ada kendala atau mau bertanya, silahkan hubungi CS kami
              </p>
            </div>
            <KontakForm />
          </div>
        </section>
        <CtaBanner textLink="DAFTAR" link="/ppdb/formulir-pendaftaran" />
      </Layouts>
    </>
  );
};

export default Ppdb;
