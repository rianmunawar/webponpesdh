import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let [navbar, setNavbar] = useState(null);
  let [cover, setCover] = useState(null);
  const toggleNavbar = () => {
    const navEl = navbar.current;
    const coverEl = cover.current;
    navEl.classList.toggle("d-none");
    coverEl.classList.toggle("d-none");
  };

  return (
    <>
      <GlobalContext.Provider
        value={{ navbar, setNavbar, toggleNavbar, cover, setCover }}
      >
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};
