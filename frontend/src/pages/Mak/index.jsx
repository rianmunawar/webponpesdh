import React from "react";
import Berita from "../../components/organisms/Berita";
import Gallery from "../../components/organisms/Gallery";
import Greating from "../../components/organisms/Greating/Greating";
import Program from "../../components/organisms/Program/Program";
import Slider from "../../components/organisms/Slider";
import Layouts from "../../Layouts";

function Mak() {
  return (
    <Layouts>
      <Slider />
      <Program />
      <Greating />
      <Berita />
      <Gallery />
    </Layouts>
  );
}

export default Mak;
