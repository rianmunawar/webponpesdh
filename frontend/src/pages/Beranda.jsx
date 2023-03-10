import React from "react";
import Berita from "../components/organisms/Berita";
import CtaBanner from "../components/organisms/CtaBanner";
import Fasilitas from "../components/organisms/Fasilitas";
import Gallery from "../components/organisms/Gallery";
import Greating from "../components/organisms/Greating/Greating";
import History from "../components/organisms/History/History";
import Program from "../components/organisms/Program/Program";
import Slider from "../components/organisms/Slider";
import Layouts from "../Layout";

const Beranda = () => {
  return (
    <>
      <Layouts>
        <Slider />
        <Program />
        <Greating />
        <History />
        <Berita />
        <Gallery />
        <Fasilitas />
        <CtaBanner textLink="informasi" link="/ppdb" />
      </Layouts>
    </>
  );
};

export default Beranda;
