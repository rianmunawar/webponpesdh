import React from "react";
import PropTypes from "prop-types";
import Styles from "./rowData.module.css";

function RowData({ label, content, ...props }) {
  return (
    <div className={`row ${Styles["item-wrapper"]}`} {...props}>
      <div className="col-12 col-md-4 py-2">
        <p className={`w-100 ${Styles["text-label"]}`}>{label}</p>
      </div>
      <div className="col-12 col-md-8 py-2">
        <p className="text-content w-100">{content}</p>
      </div>
    </div>
  );
}

RowData.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default RowData;
