import React from 'react';
import PropTypes from 'prop-types';

const CtaBtn = (props) => {
  return (
    <div className={props.className}>
      <a href={props.link} className={props.classChild}>
        {props.label}
      </a>
    </div>
  );
};

CtaBtn.propTypes = {
  className: PropTypes.string,
  classChild: PropTypes.string,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default CtaBtn;
