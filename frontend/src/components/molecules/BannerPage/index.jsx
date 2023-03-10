import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BannerPage = (props) => {
  return (
    <div
      className="container-fluid mt-100"
      style={{ height: "40vh", backgroundColor: "#ebebeb" }}
    >
      <div className="container top-50 position-relative translate-middle-y">
        <h2 className="page__title black-color ">{props.title}</h2>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {props.title}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

BannerPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BannerPage;
