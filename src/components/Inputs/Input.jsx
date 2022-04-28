import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  const { type, placeholder, handleChange, handleBlur } = props;

  return (
    <input
      name={type}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      className="block w-full p-2 mt-1 text-lg bg-transparent border rounded-lg focus:outline-none"
    ></input>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
};
