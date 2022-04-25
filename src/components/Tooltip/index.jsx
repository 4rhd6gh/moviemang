import React from "react";

export default function Tooltip({ children, tooltipText }) {
  const tipRef = React.createRef(null);
  function handleMouseEnter() {
    tipRef.current.style.opacity = 1;
    tipRef.current.style.marginLeft = "20px";
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
        style={{ bottom: "130%", left: "-110%", opacity: 0 }}
        ref={tipRef}
      >
        <div
          className="absolute w-3 h-3 bg-[#dd003f]"
          style={{ bottom: "-6px", transform: "rotate(45deg)" }}
        />
        {tooltipText}
      </div>
      {children}
    </div>
  );
}
