import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const { variant, text, type, size, focus, onClick } = props;

  let buttonType =
    variant === "contained"
      ? "bg-sky-700 text-gray-100"
      : "text-indigo-900 border-2 border-indigo-900 hover:bg-indigo-100";

  let buttonSize = size;
  buttonSize = buttonSize === "large" ? "text-2xl" : "text-base";

  let buttonFocus = focus;
  buttonFocus =
    buttonFocus === true
      ? "focus:outline-none focus:ring-1 focus:ring-offset-2"
      : "";

  return (
    <button
      type={type}
      className={`px-4 py-1 m-1 cursor-pointer rounded-full ${buttonType} ${buttonSize} ${buttonFocus} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined"]).isRequired,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  focus: PropTypes.bool,
  onClick: PropTypes.func,
};
