import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const {
    variant,
    text,
    type,
    size = "small",
    disabled = false,
    focus = false,
    onClick,
    color,
    backgroundColor,
    borderRadius,
  } = props;

  let buttonType;
  if (variant === "contained") {
    buttonType = disabled
      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
      : "bg-sky-700 text-gray-100";
  } else if (variant === "disabled") {
    buttonType = disabled
      ? "border-2 border-gray-300 text-gray-300 cursor-not-allowed"
      : "text-indigo-900 border-2 border-indigo-900 hover:bg-indigo-100";
  } else {
    buttonType = null;
  }

  let buttonSize = size;
  if (buttonSize === "small") {
    buttonSize = "px-4 py-1 text-base";
  } else if (buttonSize === "medium") {
    buttonSize = "px-8 py-1 text-lg";
  } else if (buttonSize === "large") {
    buttonSize = "px-16 py-2 text-lg";
  }

  let buttonFocus = focus;
  buttonFocus = buttonFocus
    ? "focus:outline-none focus:ring-1 focus:ring-offset-2"
    : "";

  return (
    <button
      type={type}
      className={` m-1 font-semibold cursor-pointer tracking-widest ${color} ${backgroundColor} ${borderRadius} ${buttonType} ${buttonSize} ${buttonFocus}  `}
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
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
};
