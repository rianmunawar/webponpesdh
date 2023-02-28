import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../../molecules/Admin/SideMenu";
import navtimeIcon from "../../../../assets/svg/navbar-times.svg";
import gearIcon from "../../../../assets/svg/sidebar/gear.svg";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useEffect } from "react";

function SideBar() {
  const active = "sidebar-item active";
  const normal = "sidebar-item";
  const { setNavbar, toggleNavbar } = useContext(GlobalContext);
  const navbar = useRef(null);
  useEffect(() => {
    setNavbar(navbar);
  }, []);
  return (
    <div className="col-12 col-lg-3 col-navbar d-none d-lg-block" ref={navbar}>
      <aside className="sidebar">
        <Link to="/admin" className="sidebar-logo">
          <div className="d-flex justify-content-start align-items-center">
            <img src="./assets/img/global/logo.svg" alt="gambar" />
            <span>PowerHuman</span>
          </div>
          <button id="toggle-navbar" onClick={toggleNavbar}>
            <img src={navtimeIcon} alt="navbar-times-icon" />
          </button>
        </Link>
        <h5 className="sidebar-title">Dashboard Admin</h5>
        <SideMenu
          link="/admin"
          className={({ isActive }) => (isActive ? active : normal)}
          text="Overview"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 14H14V21H21V14Z"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 14H3V21H10V14Z"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 3H14V10H21V3Z"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 3H3V10H10V3Z"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SideMenu>
        <SideMenu
          link="/admin/user"
          className={({ isActive }) => (isActive ? active : normal)}
          text="My Admin"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SideMenu>
        <SideMenu
          link="/admin/calon-siswa"
          className={({ isActive }) => (isActive ? active : normal)}
          text="Calon Siswa"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SideMenu>
        <h5 className="sidebar-title">Master Data</h5>
        <SideMenu
          link="/admin/profil"
          text="Profil Lembaga"
          className={({ isActive }) => (isActive ? active : normal)}
        >
          <img src={gearIcon} alt="gear icon" />
        </SideMenu>
        <h5 className="sidebar-title">Fitur</h5>
        <SideMenu
          link="/admin/gallery"
          text="Galeri"
          className={({ isActive }) => (isActive ? active : normal)}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.27002 6.96L12 12.01L20.73 6.96"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22.08V12"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SideMenu>
        <SideMenu
          link="/admin/logout"
          text="logout"
          className={({ isActive }) => (isActive ? active : normal)}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 17L21 12L16 7"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12H9"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
              stroke="#ABB3C4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SideMenu>
      </aside>
    </div>
  );
}

export default SideBar;
