/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SearchBar from "@page/common/appbar/SearchBar";
import { BsFillPersonFill as ProfileIcon } from "react-icons/bs";
import { HiMenu as MenuIcon } from "react-icons/hi";
import Button from "../../../components/Buttons/Button";

export default function Appbar(props) {
  const { onOpenModal, scrollPosition } = props;

  return (
    // 전체 container

    <header
      className={`z-10 flex items-center justify-center w-full pt-5 pb-5 text-white
        bg-transparent h-28 md:fixed md:top-0 md:bg-headerBackgroundColor ${
          scrollPosition > 200
            ? "fixed top-0 bg-headerBackgroundColor ease duration-300 h-28 "
            : ""
        }`}
    >
      {/* 로고 및 검색바 부분 */}
      <div className="flex items-center h-20 w-[1170px] mr-auto ml-auto pr-10 pl-10 tablet:w-[970px] md:w-[800px] ">
        {/* 로고 */}
        <div className="relative flex items-center">
          <div className="text-[70px] font-bold logo text-themePink flex items-center ">
            M
            <span className="mt-2 ml-2 text-4xl tracking-wider text-white">
              OVIEMAN
              <span className="text-themePink ml-[1px] text-4xl">G</span>
            </span>
          </div>
          <div className="absolute text-[70px] font-bold top-[-7px] left-[4px] logo text-themePink z-[-1] opacity-[0.5]">
            M
          </div>
        </div>
        <SearchBar />
        <div className="flex items-center mt-2 ml-auto font-bold tracking-widest text-l text-textMainColor nav_container md:hidden">
          <a className="ml-4 mr-4 cursor-pointer hover:text-textHighlightColor">
            PLAYLISTS
          </a>
          <a className="ml-4 mr-4 cursor-pointer hover:text-textHighlightColor ">
            MOVIES
          </a>
          <a className="ml-4 mr-4 cursor-pointer hover:text-textHighlightColor">
            LOG IN
          </a>
          <Button
            text="JOIN"
            size="small"
            type="button"
            color="text-white"
            backgroundColor="bg-themePink"
            borderRadius="rounded-2xl"
          ></Button>

          {/* <BsFillPersonFill className="w-8 h-8" /> */}
        </div>
      </div>
      <MenuIcon className="hidden w-12 h-12 p-2 mr-5 border-2 md:block" />
    </header>
  );
}
