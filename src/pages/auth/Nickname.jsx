import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as selector from "@data/rootSelectors";
import * as action from "@data/rootActions";

import Button from "@component/Button";
import Input from "@component/Input";

export default function NicknameModal() {
  const [nickname, setNickname] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector(selector.user.getUserData);

  const { accessToken, loginType, userSub, refreshToken } = userData;

  const handleNickNameInputChange = (e) => {
    setNickname(e.currentTarget.value);
  };

  const handleNickNameCreateRequest = async (e) => {
    e.preventDefault();

    await dispatch(
      action.user.createNickName(
        {
          nickname,
          userSub,
          accessToken,
          refreshToken,
          loginType,
        },
        navigate
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto my-6 mt-28 w-96">
      <form
        className="flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none"
        onSubmit={handleNickNameCreateRequest}
      >
        <div className="flex flex-col items-center justify-center p-5 border-b border-solid rounded-t border-slate-200">
          <h3 className="text-3xl font-semibold text-black">JOIN</h3>
          <p>닉네임을 입력해 주세요</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 border-t border-solid rounded-b border-slate-200 ">
          <Input
            type="text"
            placeholder="닉네임"
            width="w-full"
            padding="p-3"
            textColor="text-black"
            backgroundColor="bg-transparent"
            borderRadius="rounded-lg"
            border="border-solid border border-slate-400"
            onChange={handleNickNameInputChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-2 border-t border-solid rounded-b border-slate-200 ">
          <Button
            variant="contained"
            text="확인"
            type="submit"
            color="text-white"
            width="w-full"
            backgroundColor="bg-themePink"
            borderRadius="rounded-lg"
          />
        </div>
      </form>
    </div>
  );
}
