import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@component/Button";
import Input from "@component/Input";
import SNB from "../SNB";
import ToggleSwitch from "@page/common/toggleSwitch";
import Chart from "./chart";
import PlayListCard from "@page/common/playListCard";
import { data } from "../data";

export default function MyPage() {
  const [nickname, setNickName] = useState("");

  function handleChange(e) {
    setNickName(e.currentTarget.value);
  }

  return (
    <div className="flex w-[1170px] mx-auto">
      <div className="w-[20%]">
        <SNB />
      </div>
      <div className=" p-10 max-w-xl w-full">
        <div className="flex">
          <div className="w-52 h-52 bg-gray-500 rounded">
            <img
              className="block object-cover w-52 h-52 "
              src={""}
              alt="profile"
            />
          </div>
          <div className="mx-5 my-2">
            <Input
              type="text"
              value={nickname}
              placeholder="닉네임"
              width="w-36"
              padding="px-5 py-2"
              margin="mr-3"
              borderRadius="rounded"
              border="border-solid border border-slate-400"
              textColor="text-textMainColor"
              backgroundColor="bg-searchBarBackgroundColor"
              onChange={handleChange}
            />
            <Button
              text="수정"
              type="button"
              color="text-white"
              width="w-[80px]"
              height="h-[38px]"
              backgroundColor="bg-themePink"
              borderRadius="rounded"
            ></Button>
            <Button
              text="비밀번호 변경"
              type="button"
              color="text-white"
              width="w-[150px]"
              height="h-[38px]"
              backgroundColor="bg-themePink"
              borderRadius="rounded"
            ></Button>
            <div className="flex">
              <ToggleSwitch />
              <p className="inline-block ml-2 text-textMainColor">
                메일 서비스 구독 신청
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <Chart />
        </div>
        <div>
          <h1 className="text-xl font-bold  text-textMainColor">
            나의 플레이리스트
          </h1>
          <div className="float-right mb-4 text-xs text-textMainColor">
            <NavLink to={"playlist"}>전체보기</NavLink>
          </div>
          <div className="flex w-full justify-between items-center">
            {data.data.playlist.map((item, index) => {
              return (
                <div key={index} className="">
                  <PlayListCard
                    title={item.title}
                    id={item.id}
                    imageArray={[item.representative_image_path]}
                    likeCount={item.like_count}
                    movieCount={item.movie_count}
                    tagArray={item.tags}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
