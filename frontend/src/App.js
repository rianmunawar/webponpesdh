import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Routers from "./Routers";
import ToTop from "./utils/ToTop";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <ToTop />
      <GlobalProvider>
        <Routers />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
