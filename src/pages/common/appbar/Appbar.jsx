/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

export default function Appbar() {
  // TODO 검색바 컴포넌트로 대체
  // TODO 로고 컴포넌트로 변경
  return (
    // 전체 container
    <header className="fixed top-0 z-10 flex flex-col items-center justify-center w-full pt-5 h-30 bg-baseColor">
      {/* 상단 로그인 회원가입 부분 */}
      <div className="flex w-full h-4  border-textSideColor border-b-[1px] justify-center pb-4">
        <div className="flex items-center justify-between w-[1200px] font-light text-textSideColor">
          <p className="ml-auto mr-2">로그인</p>
          <p className="ml-2 mr-2">회원가입</p>
        </div>
      </div>
      {/* 로고 및 검색바 부분 */}
      <div className="flex items-center h-20 w-[1300px] justify-between ">
        <h1 className="text-4xl font-extrabold text-textMainColor">
          ᗰOᐯIEᗰᗩᑎG
        </h1>
        <input
          className="h-10 pl-4 ml-16 border-2 rounded-3xl w-[600px] bg-gray-100"
          type="text"
          placeholder="원하는 영화를 검색하세요"
        />
        <div className="flex items-center ml-auto mr-10 nav_container text-textSideColor">
          <a className="ml-4 mr-4 text-xl" href="">
            MY PLAYLISTS
          </a>
          <a className="ml-4 mr-4 text-xl" href="">
            MOVIES
          </a>
          <BsFillPersonFill className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
}
