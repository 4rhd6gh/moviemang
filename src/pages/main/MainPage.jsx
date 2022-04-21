import React from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import Button from "@component/Buttons/Button";
import { CgTwitter } from "react-icons/cg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import DynamicIcon from "../../components/Icons/DynamicIcon";
import Appbar from "../common/appbar/Appbar";
export default function MainPage() {
  // TODO movielist_container 공통 스타일로 빼기
  return (
    // 전체 container
    <div className="container ml-auto mr-auto pt-28">
      {/* 상단 appbar */}
      <header className="fixed top-0 w-full h-20 text-white bg-gray-600 appbar">
        AppBar 영역
      </header>
      {/* <Appbar /> */}
      {/* 인기태그 부분 */}
      <div className="flex pl-6 text-2xl items-centerpt-4 w-[70%] mr-auto ml-auto pt-6">
        <h1 className="text-base">인기태그</h1>
        <p className="ml-4 text-sm">#히어로</p>
        <p className="ml-4 text-sm">#로맨스</p>
        <p className="ml-4 text-sm">#스릴러</p>
      </div>
      {/* 영화목록 */}
      <section className="h-[40vh] pt-4 bg-purple-300 w-[70%] mr-auto ml-auto">
        <h1 className="ml-6 text-2xl">좋아요 순</h1>
        <div className="flex justify-between items-center mt-3 w-[90%] h-[30vh] bg-blue-300 ml-auto mr-auto pr-10 pl-10">
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
        </div>
      </section>
      <section className=" w-[70%] mr-auto ml-auto h-[40vh] pt-4 bg-purple-400">
        <h1 className="ml-6 text-2xl">태그기반 추천</h1>
        <div className="flex justify-between items-center mt-3 w-[90%] h-[30vh] bg-blue-300 ml-auto mr-auto pr-10 pl-10">
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
        </div>
      </section>
      <aside className="w-full h-[15vh] flex items-center justify-center border-t-2 border-b-2">
        <div className="text-2xl text-white">아이콘</div>
        <p className="ml-10 text-2xl ">
          여름이 오면 가장 먼저 생각나는 오싹한 호러영화를 투표해주세요!
        </p>
        <button className="w-16 h-10 ml-6 text-white bg-blue-400 rounded-md">
          투표
        </button>
      </aside>
      <section className="w-[70%] mr-auto ml-auto h-[40vh] pt-4 bg-purple-600">
        <h1 className="ml-6 text-2xl">좋아요 순</h1>
        <div className="flex justify-between items-center mt-3 w-[90%] h-[30vh] bg-blue-300 ml-auto mr-auto pr-10 pl-10">
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
          <div className="w-1/5 h-[27vh] border-white border-2"></div>
        </div>
      </section>
      <div className="w-full h-20 text-white bg-gray-400">분리영역</div>
      <footer className="w-full text-white bg-gray-600 h-36 ">
        footer 영역
      </footer>
    </div>
  );
}
