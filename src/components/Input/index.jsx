import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  const {
    inputName,
    type,
    value,
    width = "w-20",
    padding = "p-2",
    margin = "",
    placeholder,
    border,
    borderRadius,
    textColor,
    backgroundColor,
    onChange,
    handleBlur,
    disabled,
    required,
  } = props;

  return (
    <input
      name={inputName}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={handleBlur}
      className={` ${width} ${border} ${padding} ${margin} ${borderRadius} ${textColor} ${backgroundColor} text-sm focus:outline-none`}
      disabled={disabled ? true : false}
      required={required ? true : false}
    ></input>
  );
}

Input.propTypes = {
  inputName: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  handleBlur: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};
