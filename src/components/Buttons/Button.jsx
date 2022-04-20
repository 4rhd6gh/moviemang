import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const { text, type, width, height, color, border, focus, onClick } = props;

  return (
    <button
      type={type}
      className={`p-2 m-2 ${width} ${height} ${color} ${border} ${focus}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  border: PropTypes.string,
  focus: PropTypes.string,
  onClick: PropTypes.func,
};
