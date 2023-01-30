import React from "react";
import ToTopBtn from "../components/atoms/ToTopBtn";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header/Header";

const Layouts = (props) => {
  return (
    <>
      <ToTopBtn />
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layouts;
