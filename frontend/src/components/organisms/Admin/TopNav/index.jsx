import React, { useContext } from "react";
import burger from "../../../../assets/svg/burger.svg";
import bell from "../../../../assets/svg/bell.svg";
import search from "../../../../assets/svg/search.svg";
import { GlobalContext } from "../../../../context/GlobalContext";

function TopNav() {
  const { navbar, toggleNavbar } = useContext(GlobalContext);

  return (
    <div className="nav px-0 px-lg-3 justify-content-center">
      <div className="row w-100">
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
            <div className="d-flex justify-content-start align-items-center">
              <button id="toggle-navbar" onClick={toggleNavbar}>
                <img src={burger} className="mb-2" alt="burger icon" />
              </button>
              <h2 className="nav-title">Dashboard</h2>
            </div>
            <button className="btn-notif d-block d-md-none">
              <img src={bell} alt="bell icon" />
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-between align-items-center nav-input-container">
            <div className="nav-input-group">
              <input
                type="text"
                className="nav-input"
                placeholder="Search people, team, project"
              />
              <button className="btn-nav-input">
                <img src={search} alt="search icon" />
              </button>
            </div>
            <button className="btn-notif d-none d-md-block">
              <img src={bell} alt="bell icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
