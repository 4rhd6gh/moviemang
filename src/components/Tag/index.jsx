import React from "react";
import PropTypes from "prop-types";

export default function Tag(props) {
  const { text, size = "medium", onClick } = props;
  let textSize = size;
  if (textSize === "small") {
    textSize = "text-xs";
  } else if (textSize === "medium") {
    textSize = "text-lg";
  } else if (textSize === "large") {
    textSize = "text-xl";
  }

  return (
    <div
      className={`${textSize} text-gray-500`}
      onClick={onClick}
    >{`#${text}`}</div>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
};
