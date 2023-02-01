import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CtaBtn = (props) => {
  return (
    <div className={props.className}>
      <Link to={props.link} className={props.classChild}>
        {props.label}
      </Link>
    </div>
  );
};

CtaBtn.propTypes = {
  className: PropTypes.string,
  classChild: PropTypes.string,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CtaBtn;
