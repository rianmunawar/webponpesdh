import React from "react";
import Proptypes from "prop-types";

export default function SocialIcon(props) {
  return (
    <>
      <a href={props.url} target={props.target} className={props.className}>
        <i className={props.classImg} />
      </a>
    </>
  );
}

SocialIcon.defaultPropTypes = {
  className: "",
};

SocialIcon.propTypes = {
  url: Proptypes.string.isRequired,
  target: Proptypes.string.isRequired,
  className: Proptypes.string,
  classImg: Proptypes.string.isRequired,
};
