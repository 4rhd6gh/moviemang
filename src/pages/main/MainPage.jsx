import React from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import Button from "@component/Buttons/Button";
import { CgTwitter } from "react-icons/cg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import DynamicIcon from "../../components/Icons/DynamicIcon";
export default function MainPage() {
  // TODO movielist_container 공통 스타일로 빼기
  return (
    // 전체 container
    <div className="container w-[70%] ml-auto mr-auto pt-20">
      {/* 상단 appbar */}
      <header className="fixed top-0 w-[70%] h-20 bg-gray-600 appbar text-white">
        AppBar 영역
      </header>
      {/* 인기태그 부분 */}
      <div className="flex items-center w-full pt-4 pl-6 ml-auto mr-auto text-2xl bg-purple-200">
        <h1 className="text-base">인기태그</h1>
        <p className="ml-4 text-sm">#히어로</p>
        <p className="ml-4 text-sm">#히어로</p>
        <p className="ml-4 text-sm">#히어로</p>
      </div>
      {/* 영화목록 */}
      <section className="w-full h-[40vh] pt-4 bg-purple-300">
        <h1 className="ml-6 text-2xl">좋아요 순</h1>
        <div className="flex justify-between items-center mt-3 w-[90%] h-[30vh] bg-blue-300 ml-auto mr-auto pr-10 pl-10">
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
        </div>
      </section>
      <section className="w-full h-[40vh] pt-4 bg-purple-400">
        <h1 className="ml-6 text-2xl">태그기반 추천</h1>
        <div className="flex justify-between items-center mt-3 w-[90%] h-[30vh] bg-blue-300 ml-auto mr-auto pr-10 pl-10">
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
        </div>
      </section>
      <aside className="w-full h-[15vh] bg-purple-500 flex items-center justify-center">
        <div className="text-2xl text-white">아이콘</div>
        <p className="ml-10 text-2xl">
          여름이 오면 가장 먼저 생각나는 오싹한 호러영화를 투표해주세요!
        </p>
        <button className="w-16 h-10 ml-6 text-white bg-blue-400 rounded-md">
          투표
        </button>
      </aside>
      <section className="w-full h-[40vh] pt-4 bg-purple-600">
        <h1 className="ml-6 text-2xl">좋아요 순</h1>
        <div className="flex justify-between items-center mt-3 w-[90%] h-[30vh] bg-blue-300 ml-auto mr-auto pr-10 pl-10">
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
        </div>
      </section>
      <footer className="w-full text-white bg-gray-600 h-36 mt-28">
        footer 영역
      </footer>
    </div>
  );
}
