import React from "react";
import { NavLink } from "react-router-dom";

export default function SNB() {
  return (
    <nav className=" max-w-xs w-full ">
      <div className="flex flex-col text-right p-10 font-bold tracking-widest text-l text-textMainColor">
        <NavLink
          to={"/member"}
          end
          className="hover:text-textHighlightColor pb-3"
          style={({ isActive }) => (isActive ? { color: "#dcf836" } : {})}
        >
          나의 정보
        </NavLink>
        <NavLink
          to={"/member/playlist"}
          end
          className="hover:text-textHighlightColor pb-3"
          style={({ isActive }) => (isActive ? { color: "#dcf836" } : {})}
        >
          플레이리스트
        </NavLink>
      </div>
    </nav>
  );
}
