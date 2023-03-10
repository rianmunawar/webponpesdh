import React from "react";
import { Navigate, Outlet, redirect, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import AdminLayout from "../Layout/AdminLayout";
import Admin from "../pages/Admin";
import AdminGallery from "../pages/Admin/AdminGallery";
import AdminSetting from "../pages/Admin/AdminSetting";
import Beranda from "../pages/Beranda";
import BeritaPage from "../pages/BeritaPage";
import KontakPage from "../pages/KontakPage";
import Mak from "../pages/Mak";
import NotFoundPage from "../pages/NotFoundPage";
import Pendaftaran from "../pages/Pendaftaran";
import Ppdb from "../pages/Ppdb";
import ProfilPage from "../pages/ProfilPage";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Success from "../pages/Pendaftaran/success";

function Routers() {
  const RouteGuard = ({ redirectUrl = "/user/login", children }) => {
    if (!Cookies.get("token")) return <Navigate to={redirectUrl} replace />;
    return children ? children : <Outlet />;
  };
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="profil" element={<ProfilPage />} preventScrollReset={true} />
      <Route path="blog" element={<BeritaPage />} />
      <Route path="kontak" element={<KontakPage />} />
      <Route path="mak" element={<Mak />} />
      <Route path="ppdb" element={<Ppdb />} />
      <Route path="ppdb/formulir-pendaftaran" element={<Pendaftaran />} />
      <Route path="ppdb/pendaftaran-selesai" element={<Success />} />
      <Route element={<RouteGuard />}>
        <Route path="/" element={<AdminLayout />}>
          <Route path="admin" element={<Admin />} />
          <Route path="admin/gallery" element={<AdminGallery />} />
          <Route path="admin/profil" element={<AdminSetting />} />
        </Route>
      </Route>
      <Route path="/user/">
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routers;
