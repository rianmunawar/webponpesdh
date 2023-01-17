import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
var cx = classNames.bind("./backToTop.css");
import "./backToTop.css";

const ToTopBtn = () => {
  const [yPos, setYPos] = useState(0);

  const handleScrroll = () => {
    const y = window.scrollY;
    setYPos(y);
    const el = document.querySelector(".progress-wrap path");
    const t = el.getTotalLength();
    el.style.transition = el.style.WebkitTransition = "none";
    el.style.strokeDasharray = `${t} ${t}`;
    el.getBoundingClientRect();
    el.style.transition = el.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    const s = document.documentElement.offsetHeight - window.innerHeight;
    const i = t - (y * t) / s;
    el.style.strokeDashoffset = i;
  };
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  useEffect(() => {
    handleScrroll();
    window.addEventListener("scroll", handleScrroll);
  }, []);
  const className = cx({
    "progress-wrap": true,
    "active-progress": yPos > 50,
  });
  return (
    <div className={className} onClick={backToTop}>
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
};

export default ToTopBtn;
