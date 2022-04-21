import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const { variant, text, type, size = "small", focus = false, onClick } = props;

  let buttonType = variant;
  if (variant === "contained") {
    buttonType = "bg-sky-700 text-gray-100";
  } else if (variant === "outlined") {
    buttonType =
      "text-indigo-900 border-2 border-indigo-900 hover:bg-indigo-100";
  } else if (variant === "disabled") {
    buttonType = "bg-gray-600 text-gray-300 cursor-default";
  }

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
  variant: PropTypes.oneOf(["contained", "outlined", "disabled"]).isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  focus: PropTypes.bool,
  onClick: PropTypes.func,
};
