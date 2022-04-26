import React, { useState } from "react";

export default function Tooltip({ children, tooltipText }) {
  const tipRef = React.createRef(null);
  const [tooltipStyle, setTooltipStyle] = useState({
    bottom: "130%",
    left: "-110%",
    opacity: 0,
  });
  const [tooltipArrow, setTooltipArrow] = useState({
    bottom: "-6px",
    transform: "rotate(45deg)",
  });

  function handleMouseEnter() {
    tipRef.current.style.opacity = 1;
    tipRef.current.style.marginLeft = "20px";
    if (tipRef.current.getBoundingClientRect().top < 180) {
      setTooltipStyle({
        top: "130%",
        left: "-110%",
        opacity: 1,
        bottom: "auto",
      });
      setTooltipArrow({
        top: "-6px",
        transform: "rotate(45deg)",
      });
    } else {
      setTooltipStyle({
        top: "auto",
        left: "-110%",
        opacity: 1,
        bottom: "130%",
      });
      setTooltipArrow({
        bottom: "-6px",
        transform: "rotate(45deg)",
      });
    }
  }
  function handleMouseLeave() {
    tipRef.current.style.opacity = 0;
    tipRef.current.style.marginLeft = "10px";
  }
  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* TODO:bg-[#dd003f] tailwindcss 전역 색으로 바꾸기 */}
      <div
        className="absolute flex items-center px-4 py-2 text-xs text-white whitespace-no-wrap transition-all duration-150 rounded w-36 bg-[#dd003f]"
        style={tooltipStyle}
        ref={tipRef}
      >
        <div className="absolute w-3 h-3 bg-[#dd003f]" style={tooltipArrow} />
        {tooltipText}
      </div>
      {children}
    </div>
  );
}
