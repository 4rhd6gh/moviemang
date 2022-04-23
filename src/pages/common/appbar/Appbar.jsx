/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SearchBar from "@page/common/appbar/SearchBar";
export default function Appbar() {
  // TODO 검색바 컴포넌트로 대체
  // TODO 타이포그래피 변경
  // TODO 로고 컴포넌트로 변경
  return (
    // 전체 container
    <header className="fixed top-0 flex flex-col w-full h-28 border-b-[1.5px] z-10 bg-white">
      {/* 상단 로그인 회원가입 부분 */}
      <div className="flex w-full h-8 border-b-[1.5px] topPart">
        <div className="flex items-center justify-between pr-8 ml-auto font-light">
          <p className="ml-2 mr-2">로그인</p>
          <p className="ml-2 mr-2">회원가입</p>
        </div>
      </div>
      {/* 로고 및 검색바 부분 */}
      <div className="flex items-center h-20 pl-16 pr-8 mainPart w-[1300px] mr-auto ml-auto max-w-[1300px]">
        <h1 className="text-3xl italic font-extrabold">MovieMang</h1>
        <SearchBar />
        <div className="ml-auto mr-20 text-l nav_container">
          <a className="ml-4 mr-4" href="">
            PLAYLISTS
          </a>
          <a className="ml-4 mr-4" href="">
            MOVIES
          </a>
        </div>
      </div>
    </header>
  );
}
