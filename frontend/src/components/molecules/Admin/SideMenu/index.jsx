import React from "react";
import { NavLink } from "react-router-dom";

function SideMenu(props) {
  const { link, className, text, children } = props;
  return (
    <NavLink to={link} className={className}>
      {children}
      <span>{text}</span>
    </NavLink>
  );
}

export default SideMenu;
