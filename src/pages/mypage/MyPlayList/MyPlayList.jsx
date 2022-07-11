import React, { useState } from "react";
import SNB from "../SNB";
import Tabs from "@component/Tabs";
import MyPlay from "./components/tabContents/MyPlay";
import JjimPlay from "./components/tabContents/JjimPlay";

export default function MyPlayList() {
  const [activeTab, setActiveTab] = useState(0);
  const onClickTab = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="flex w-[1170px] mx-auto">
      <div className="w-[20%]">
        <SNB />
      </div>
      <div className="w-[80%]">
        <div className="max-w-xl p-10 text-4xl font-bold text-white uppercase ">
          playlist
        </div>
        <div className="pl-10 text-lg">
          <Tabs
            activeTab={activeTab}
            onClick={onClickTab}
            menuList={[
              { href: "#myplay", name: "나의 플레이리스트" },
              { href: "#jjimplay", name: "찜한 플레이리스트" },
            ]}
          />
        </div>
        <div className="w-full">
          {activeTab === 0 ? <MyPlay /> : <JjimPlay />}
        </div>
      </div>
    </div>
  );
}
