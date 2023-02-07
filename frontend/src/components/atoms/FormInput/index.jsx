import React from "react";
import PropTypes from "prop-types";

const FormInput = React.forwardRef((props, ref) => {
  const {
    label,
    type,
    name,
    className,
    mb,
    error,
    onKeyUp,
    isRequired,
    ...propInput
  } = props;
  return (
    <div className={`mb-${mb}`}>
      <label className="form-label text-black" htmlFor={name}>
        {label}
        {isRequired ? <span className="text-danger">*</span> : ""}
      </label>
      <input
        type={type}
        className={className}
        name={name}
        {...propInput}
        ref={ref}
        onKeyUp={() => onKeyUp}
      />
      {error}
    </div>
  );
});

FormInput.defaultProps = {
  className: "form-control",
  isRequired: false,
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mb: PropTypes.string.isRequired,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default FormInput;
