import React from "react";
import PropTypes from "prop-types";

export default function StaticIcon(props) {
  const { icon, size, color, onClick } = props;
  const StaticIcon = icon;
  let iconSize = size;
  if (iconSize === "small") {
    iconSize = "w-6 h-6";
  } else if (iconSize === "medium") {
    iconSize = "w-8 h-8";
  } else if (iconSize === "large") {
    iconSize = "w-10 h-10";
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
