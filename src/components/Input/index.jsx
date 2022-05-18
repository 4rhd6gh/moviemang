import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  const { inputName, type, placeholder, handleChange, handleBlur, disabled } =
    props;

  return (
    <input
      name={inputName}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      className="block w-64 p-2 mt-1 mr-2 text-lg text-black border rounded-lg focus:outline-none"
      disabled={disabled ? true : false}
    ></input>
  );
}

Input.propTypes = {
  inputName: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  disabled: PropTypes.bool,
};
