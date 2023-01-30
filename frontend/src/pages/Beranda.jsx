import React from "react";
import Berita from "../components/organisms/Berita";
import CtaBanner from "../components/organisms/CtaBanner";
import Gallery from "../components/organisms/Gallery";
import Greating from "../components/organisms/Greating/Greating";
import History from "../components/organisms/History/History";
import Program from "../components/organisms/Program/Program";
import Slider from "../components/organisms/Slider";
import Layouts from "../Layouts";

const Beranda = () => {
  return (
    <Layouts>
      <Slider />
      <Program />
      <Greating />
      <History />
      <Berita />
      <Gallery />
      <CtaBanner />
    </Layouts>
  );
};

export default Beranda;
