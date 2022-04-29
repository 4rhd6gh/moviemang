/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SearchBar from "@page/common/appbar/SearchBar";
import { BsFillPersonFill } from "react-icons/bs";

export default function Appbar(props) {
  const { onOpenModal } = props;
  return (
    // 전체 container
    <header className="fixed top-0 z-10 flex flex-col items-center justify-center w-full pt-5 text-white bg-transparent h-30">
      {/* 로고 및 검색바 부분 */}
      <div className="flex items-center h-20 pl-16 pr-8 mainPart w-[1300px] mr-auto ml-auto max-w-[1300px]">
        <h1 className="text-3xl italic font-extrabold text-textMainColor">
          MovieMang
        </h1>
        {/* <SearchBar /> */}
        <div className="flex ml-auto mr-20 text-l text-textMainColor nav_container">
          <a className="ml-4 mr-4" href="">
            PLAYLISTS
          </a>
          <a className="ml-4 mr-4 " href="">
            MOVIES
          </a>
          <BsFillPersonFill className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
}
