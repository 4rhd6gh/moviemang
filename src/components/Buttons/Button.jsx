import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const {
    variant,
    text,
    type,
    width = 20,
    height = 10,
    disabled = false,
    focus = false,
    onClick,
  } = props;

  let buttonType;
  if (variant === "contained") {
    buttonType = disabled
      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
      : "bg-sky-700 text-gray-100";
  } else {
    buttonType = disabled
      ? "border-2 border-gray-300 text-gray-300 cursor-not-allowed"
      : "text-indigo-900 border-2 border-indigo-900 hover:bg-indigo-100";
  }

  let buttonFocus = focus;
  buttonFocus = buttonFocus
    ? "focus:outline-none focus:ring-1 focus:ring-offset-2"
    : "";

  return (
    <button
      type={type}
      className={` m-1 cursor-pointer rounded-lg w-${width} h-${height} ${buttonType} ${buttonFocus} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined"]).isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
  onClick: PropTypes.func,
};
