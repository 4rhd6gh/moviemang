import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function SNB() {
  return (
    <nav className=" max-w-xs w-full ">
      <div className="flex flex-col text-right p-10 font-bold tracking-widest text-l text-textMainColor">
        <NavLink to={"/member"} className="hover:text-textHighlightColor pb-3">
          나의 정보
        </NavLink>
        <NavLink
          to={"/member/playlist"}
          className="hover:text-textHighlightColor pb-3"
        >
          플레이리스트
        </NavLink>
        <NavLink
          to={"/member/review"}
          className="hover:text-textHighlightColor pb-3"
        >
          리뷰
        </NavLink>
      </div>
    </nav>
  );
}
