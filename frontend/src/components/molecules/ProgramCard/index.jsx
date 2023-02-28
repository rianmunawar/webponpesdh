import React from "react";
const PropTypes = require("prop-types");
import "./program-card.css";

function ProgramCard(props) {
  return (
    <div className="program__item mb-30 transition-3 d-flex align-items-center w-100 h-100">
      <div className="program__icon mr-30">
        <img src={props.icon} alt={props.icon} />
      </div>
      <div className="program__content">
        <h4 className="program__title">{props.content}</h4>
        {props.children}
      </div>
    </div>
  );
}
ProgramCard.defaultProps = {
  children: null,
};
ProgramCard.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ProgramCard;
