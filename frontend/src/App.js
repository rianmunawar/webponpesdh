import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Routers from "./Routers";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routers />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
