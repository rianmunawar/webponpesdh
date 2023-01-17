import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../components/molecules/Loading";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header/Header";

const Layouts = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          {props.children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layouts;
