import React from "react";
import StaticIcon from "@component/Icons/StaticIcon";
import Button from "@component/Buttons/Button";
import { CgTwitter } from "react-icons/cg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import DynamicIcon from "../../components/Icons/DynamicIcon";
import Appbar from "../common/appbar/Appbar";
import Avengers from "./test.jpg";
import AboutTime from "./AboutTime.jpg";

export default function MainPage() {
  // TODO movielist_container 공통 스타일로 빼기
  //
  return (
    // 전체 container
    <div className="container ml-auto mr-auto bg-baseColor pt-28 ">
      {/* 상단 appbar */}
      <Appbar />
      {/* 인기태그 부분 */}
      <div className="flex pl-6 text-2xl items-center w-[1200px] mr-auto ml-auto pt-6 mb-10">
        <h1 className="text-base text-textMainColor">인기태그</h1>
        <p className="ml-4 text-sm text-textSideColor">#히어로</p>
        <p className="ml-4 text-sm text-textSideColor">#로맨스</p>
        <p className="ml-4 text-sm text-textSideColor">#스릴러</p>
      </div>
      {/* 영화목록 */}
      <section className="w-[1400px] h-[600px] pt-4 ml-auto mr-auto">
        <h1 className="ml-6 text-2xl text-textMainColor">
          좋아요가 가장 많은 플레이리스트
        </h1>
        <div className="flex items-center justify-between w-[100%] h-[500px] pl-10 pr-10 ml-auto mr-auto">
          <div className="w-[250px] h-[450px]  flex flex-col">
            <div className="w-full">
              <img
                src={Avengers}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="w-full h-[150px] bg-CardBgColor mt-auto"></div>
          </div>
          <div className="w-[250px] h-[450px]  flex flex-col">
            <div className="w-full">
              <img
                src={Avengers}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="w-full h-[150px] bg-CardBgColor2 mt-auto"></div>
          </div>
          <div className="w-[250px] h-[450px]  flex flex-col">
            <div className="w-full">
              <img
                src={Avengers}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="w-full h-[150px] bg-CardBgColor3 mt-auto"></div>
          </div>
          <div className="w-[250px] h-[450px]  flex flex-col">
            <div className="w-full">
              <img
                src={Avengers}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="w-full h-[150px] bg-CardBgColor4 mt-auto"></div>
          </div>
          <div className="w-[250px] h-[450px]  flex flex-col">
            <div className="w-full">
              <img
                src={Avengers}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="w-full h-[150px] bg-CardBgColor5 mt-auto"></div>
          </div>
        </div>
      </section>
      <section className="playListCard_section">
        <h1 className="ml-6 text-2xl text-textMainColor">
          태그기반 추천 플레이리스트
        </h1>
        <div className="playListCard_item_container">
          <div className="flex flex-col playListCard_item">
            <div className="">
              <img
                src={AboutTime}
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="w-full h-[150px] bg-CardBgColor6 mt-auto"></div>
          </div>
          <div className="flex flex-col playListCard_item">
            <div className="">
              <img
                src={AboutTime}
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="w-full h-[150px] bg-CardBgColor7 mt-auto"></div>
          </div>
          <div className="flex flex-col playListCard_item">
            <div className="">
              <img
                src={AboutTime}
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="w-full h-[150px] bg-CardBgColor8 mt-auto"></div>
          </div>
          <div className="flex flex-col playListCard_item">
            <div className="">
              <img
                src={AboutTime}
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="w-full h-[150px] bg-CardBgColor9 mt-auto"></div>
          </div>
        </div>
      </section>
      <aside className="w-full h-[150px] flex items-center justify-center border-t-[1px] border-b-[1px] mb-10">
        <div className="text-2xl text-blue-300"></div>
        <p className="ml-10 text-2xl text-white">
          여름이 오면 가장 먼저 생각나는 오싹한 호러영화를 투표해주세요!
        </p>
        <button className="w-16 h-10 ml-6 text-white bg-blue-700 rounded-md">
          투표
        </button>
      </aside>
      <section className="playListCard_section">
        <h1 className="ml-6 text-2xl text-white">좋아요 순</h1>
        <div className="playListCard_item_container">
          <div className="flex flex-col playListCard_item border-[1.5px]">
            <div className=""></div>
            <div className="w-full h-[150px] bg-white mt-auto"></div>
          </div>
          <div className="playListCard_item border-[1.5px]"></div>
          <div className="playListCard_item border-[1.5px]"></div>
          <div className="playListCard_item border-[1.5px]"></div>
        </div>
      </section>
      <div className="w-full h-20 text-white bg-baseColor border-t-[1px]">
        분리영역
      </div>
      <footer className="w-full text-white bg-baseColor border-t-[1px] h-36">
        footer 영역
      </footer>
    </div>
  );
}
