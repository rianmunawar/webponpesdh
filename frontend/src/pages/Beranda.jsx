import React from "react";
import Berita from "../components/organisms/Berita";
import CtaBanner from "../components/organisms/CtaBanner";
import Gallery from "../components/organisms/Gallery";
import Greating from "../components/organisms/Greating/Greating";
import History from "../components/organisms/History/History";
import Program from "../components/organisms/Program/Program";
import Slider from "../components/organisms/Slider";

const Beranda = () => {
  return (
    <>
      <Slider />
      <Program />
      <Greating />
      <History />
      <Berita />
      <Gallery />
      <CtaBanner />
    </>
  );
};

export default Beranda;
