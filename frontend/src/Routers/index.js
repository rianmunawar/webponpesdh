import React from "react";
import { Route, Routes } from "react-router-dom";
import Beranda from "../pages/Beranda";
import BeritaPage from "../pages/BeritaPage";
import KontakPage from "../pages/KontakPage";
import Mak from "../pages/Mak";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilPage from "../pages/ProfilPage";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/profil" element={<ProfilPage />} />
      <Route path="/blog" element={<BeritaPage />} />
      <Route path="/kontak" element={<KontakPage />} />
      <Route path="/mak" element={<Mak />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routers;
