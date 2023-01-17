import React from "react";
import "./preloader.css";

const Loading = () => {
  return (
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="object object_one" />
          <div className="object object_two" style={{ left: 20 }} />
          <div className="object object_three" style={{ left: 40 }} />
          <div className="object object_four" style={{ left: 60 }} />
          <div className="object object_five" style={{ left: 80 }} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
