import React from "react";
import PropTypes from "prop-types";

export default function DynamicIcon(props) {
  const { clickedIcon, unClickedIcon, size, color, onClick, isClicked } = props;
  console.log(isClicked);

  const DynamicIcon = isClicked ? clickedIcon : unClickedIcon;

  let iconSize = size;
  if (iconSize === "small") {
    iconSize = "w-6 h-6";
  } else if (iconSize === "medium") {
    iconSize = "w-8 h-8";
  } else if (iconSize === "large") {
    iconSize = "w-10 h-10";
  }

  return <DynamicIcon className={`${iconSize} ${color}`}></DynamicIcon>;
}

DynamicIcon.propTypes = {
  clickedIcon: PropTypes.func.isRequired,
  unClickedIcon: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  onClick: PropTypes.func,
  isClicked: PropTypes.bool,
};
