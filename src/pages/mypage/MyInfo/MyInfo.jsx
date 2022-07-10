import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as selector from "@data/rootSelectors";
import * as action from "@data/rootActions";

import Button from "@component/Button";
import Input from "@component/Input";
import SNB from "../SNB";
import Chart from "./chart";
import PlayListCard from "@page/common/playListCard";
import * as Mock from "@data/mock";
import { BsPersonFill as PersonIcon } from "react-icons/bs";

export default function MyPage() {
  const userData = useSelector(selector.user.getUserData);
  const [nickname, setNickName] = useState(userData.nickname);

  const dispatch = useDispatch();

  const currentUserNickName = localStorage.getItem("nickname");

  console.log(currentUserNickName);

  function loginType() {
    let sns = userData.loginType;
    console.log(sns);
    if (sns === "kakao") {
      return (
        <div className="w-[94px] py-2 px-3 mt-2 rounded bg-[#FEE500] whitespace-pre">
          Kakao 계정
        </div>
      );
    } else if (sns === "naver") {
      return (
        <div className="w-[91px] py-2 px-3 mt-2 rounded text-white bg-[#18CE5F] whitespace-pre">
          Naver 계정
        </div>
      );
    } else {
      return (
        <div className="w-[98px] py-2 px-3 mt-2 rounded text-white bg-[#4285F4] whitespace-pre">
          Google 계정
        </div>
      );
    }
  }

  function handleNickNameInputChange(e) {
    setNickName(e.currentTarget.value);
  }

  const handleNickNameChangeRequest = async (e) => {
    e.preventDefault();
    await dispatch(
      action.user.editNickName({
        nickname,
      })
    );
  };

  return (
    <div className="flex w-[1170px] mx-auto">
      <div className="w-[20%]">
        <SNB />
      </div>
      <div className="w-full max-w-2xl p-10 ">
        <div className="flex">
          <div className="bg-gray-400 rounded w-52 h-52">
            <PersonIcon className="w-52 h-52" fill="#d1d5db" />
          </div>
          <form className="mx-5 my-2" onSubmit={handleNickNameChangeRequest}>
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
              onChange={handleNickNameInputChange}
            />
            <Button
              text="수정"
              type="submit"
              color="text-white"
              width="w-[80px]"
              height="h-[38px]"
              backgroundColor="bg-themePink"
              borderRadius="rounded"
            />
            {loginType()}
          </form>
        </div>
        <div className="my-10">
          <Chart />
        </div>
        <div>
          <h1 className="text-xl font-bold text-textMainColor">
            나의 플레이리스트
          </h1>
          <div className="float-right mb-4 text-xs text-textMainColor">
            <NavLink to={"playlist"}>전체보기</NavLink>
          </div>
          <div className="flex items-center justify-between w-full">
            {Mock.playList.playList.slice(0, 2).map((movie, index) => {
              return (
                <div key={index}>
                  <PlayListCard
                    title={movie.title}
                    id={movie.id}
                    imageArray={movie.image}
                    likeCount={movie.likeCount}
                    movieCount={movie.movieCount}
                    tagArray={movie.tagArray}
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
