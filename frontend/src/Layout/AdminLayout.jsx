import React, { useContext, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/organisms/Admin/SideBar";
import TopNav from "../components/organisms/Admin/TopNav";
import { GlobalContext } from "../context/GlobalContext";

function AdminLayout(props) {
  const date = new Date();
  const currentYear = date.getFullYear();
  const { setCover, toggleNavbar } = useContext(GlobalContext);
  const cover = useRef(null);
  useEffect(() => {
    setCover(cover);
  }, []);
  return (
    <>
      <div
        className="screen-cover d-none d-xl-none"
        ref={cover}
        onClick={toggleNavbar}
      ></div>
      <div className="row" style={{ background: "#F8F8FA" }}>
        <SideBar />
        <div className="col-12 col-lg-9 main-content">
          <TopNav />
          <div className="content p-md-5">
            <Outlet />
          </div>
        </div>
        <div className="container">
          <footer className="py-5 w-100 ms-lg-5 px-3 px-md-0">
            <div className="footer__copyright text-center">
              <p>
                © {currentYear} Ponpes Darul Hikmah | All Rights Reserved |
                Develope By &nbsp;
                <a
                  href="https://www.instagram.com/rianmunawar13/"
                  target={"_blank"}
                  className="text-black fw-semibold"
                >
                  Rian Munawar
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
