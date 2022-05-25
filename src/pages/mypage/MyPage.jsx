import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Input from "@component/Input";
import Button from "@component/Button";
import SNB from "./SNB";
import ToggleSwitch from "@page/common/toggleSwitch";

export default function MyPage() {
  const [nickname, setNickName] = useState("");

  function handleChange(e) {
    setNickName(e.currentTarget.value);
  }

  return (
    <div className="w-[1170px] mx-auto">
      <SNB />
      <div className="inline-block p-10 max-w-xl  w-full 	">
        <div className="flex">
          <div className=" w-40 h-40 bg-gray-500 rounded">
            <img
              className="block object-cover w-40 h-40 "
              src={""}
              alt="profile"
            />
          </div>
          <div className="mx-5 my-2">
            <input
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={nickname}
              className="w-36 h-10 px-5 pr-10 mr-3 text-sm rounded text-textMainColor bg-searchBarBackgroundColor focus:outline-none"
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
            <div className="flex	">
              <ToggleSwitch />
              <p className="inline-block ml-2 text-textMainColor">
                메일 서비스 구독 신청
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
