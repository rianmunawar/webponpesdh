import React from 'react';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header/Header';

const Layouts = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layouts;
