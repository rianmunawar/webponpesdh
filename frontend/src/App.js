import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Routers from "./Routers";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routers />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
