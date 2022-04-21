import React, { useState } from "react";
import PropTypes from "prop-types";

export default function StaticIcon(props) {
  const { icon, size = "medium", color = "text-gray-900", onClick } = props;
  const StaticIcon = icon;
  let iconSize = size;
  if (iconSize === "small") {
    iconSize = "w-6 h-6";
  } else if (iconSize === "medium") {
    iconSize = "w-10 h-10";
  } else if (iconSize === "large") {
    iconSize = "w-12 h-12";
  } else if (iconSize === "xlarge") {
    iconSize = "w-16 h-16";
  } else if (iconSize === "xxlarge") {
    iconSize = "w-20 h-20";
  }

  return (
    <StaticIcon
      className={`${iconSize} ${color} hover:opacity-80`}
    ></StaticIcon>
  );
}

StaticIcon.propTypes = {
  icon: PropTypes.func.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
