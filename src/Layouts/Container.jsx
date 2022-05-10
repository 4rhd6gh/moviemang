import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Appbar from "../pages/common/appbar/Appbar";

export default function Container({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <div
      className={`container  pb-[100px] relative ml-auto mr-auto md:pt-28 bg-transparent ${
        scrollPosition > 200 ? "pt-28" : ""
      }`}
    >
      <Appbar scrollPosition={scrollPosition} />
      {children}
      <footer className="absolute bottom-0 w-full bg-black text-textHighlightColor h-36">
        footer 영역
      </footer>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.element,
};
