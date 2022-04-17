import React from "react";
import PropTypes from "prop-types";

export default function StaticIcon(props) {
  return <div>StaticIcon</div>;
}

StaticIcon.PropTypes = {
  icon: PropTypes.object.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
