import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ToggleSwitch(props) {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      className={
        "md:w-14 md:h-7 w-12 h-6 mx-2 flex items-center rounded-full p-1 cursor-pointer " +
        (toggle ? "bg-gray-300/50" : "bg-blue-300/50 ")
      }
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div
        className={
          "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md " +
          (toggle ? "bg-white" : "bg-blue-400 transform translate-x-5")
        }
      ></div>
    </div>
  );
}

ToggleSwitch.propTypes = {};
