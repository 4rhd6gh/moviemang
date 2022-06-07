import React from "react";
import PropTypes from "prop-types";

export default function Tabs(props) {
  const { activeTab, onClick, menuList = [] } = props;

  return (
    <ul className="flex">
      {menuList.map((menu, index) => (
        <li className="pr-10" key={index}>
          <a
            onClick={() => onClick(index)}
            className={
              activeTab === index
                ? "border-b-4 border-solid border-[#dcf836] text-[#dcf836] uppercase font-bold pb-3"
                : "font-bold text-[#abb7c4] uppercase " +
                  `hover:border-b-4 border-solid border-[#dcf836] hover:text-[#dcf836] pb-3`
            }
            href={menu.href}
          >
            {menu.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
Tabs.propTypes = {
  activeTab: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  menuList: PropTypes.array.isRequired,
};
