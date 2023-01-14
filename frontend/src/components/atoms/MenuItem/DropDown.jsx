import React from 'react';

const DropDown = (props) => {
  return (
    <li className="has-dropdown">
      <a href={props.linkDd}>{props.label}</a>
      <ul className="submenu">{props.children}</ul>
    </li>
  );
};

export default DropDown;
