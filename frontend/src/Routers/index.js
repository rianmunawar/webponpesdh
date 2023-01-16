import React from "react";
import { Route, Routes } from "react-router-dom";
import BeritaPage from "../pages/BeritaPage";
import HomePage from "../pages/HomePage/index";
import KontakPage from "../pages/KontakPage";
import ProfilPage from "../pages/ProfilPage";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profil" element={<ProfilPage />} />
      <Route path="/blog" element={<BeritaPage />} />
      <Route path="/kontak" element={<KontakPage />} />
    </Routes>
  );
}

export default Routers;
