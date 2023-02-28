import React from "react";

function CardStatistik(props) {
  return (
    <div className="statistics-card">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column justify-content-between align-items-start">
          <h5 className="content-desc">{props.text}</h5>
          <h3 className="statistics-value">{props.value}</h3>
        </div>
        <button className="btn-statistics">
          <img src={props.icon} alt={`${props.text} icon`} />
        </button>
      </div>
    </div>
  );
}

export default CardStatistik;
