import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const { label, link, className, dropDown } = props;
  return (
    <li className={className}>
      <a href={link}>{label}</a>
      {dropDown}
    </li>
  );
};

MenuItem.defaultProps = {
  className: '',
  dropDown: ''
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default MenuItem;
