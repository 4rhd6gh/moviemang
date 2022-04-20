import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const {
    text,
    type,
    size,
    textColor,
    backgroundColor,
    borderWidth,
    borderColor,
    borderRadius,
    focus,
    cursor,
    onClick,
  } = props;
  let cursorType = cursor;
  cursorType = cursorType === "pointer" ? "cursor-pointer" : "cursor-auto";

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
      className={`px-4 py-1 m-1 ${buttonSize} ${textColor} ${backgroundColor} ${borderWidth} ${borderColor} ${borderRadius} ${buttonFocus} ${cursorType}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  focus: PropTypes.bool,
  cursor: PropTypes.string,
  onClick: PropTypes.func,
};
