import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ToggleSwitch(props) {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      className={
        " w-12 h-6 inline-block relative m-0 items-center rounded-full  cursor-pointer " +
        (toggle ? "bg-gray-300/50" : "bg-themePink/50 ")
      }
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div
        className={
          "bg-white md:h-6 h-5 w-5 m-0 rounded-full shadow-md absolute top-0.5 left-1 " +
          (toggle ? "bg-white" : "bg-themePink transform translate-x-5")
        }
      ></div>
    </div>
  );
}

ToggleSwitch.propTypes = {};
