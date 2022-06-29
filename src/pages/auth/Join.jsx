import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as selector from "@data/rootSelectors";
import { kakaoLoginImage, naverLoginImage } from "@assets/index";
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../../constants/index";

import GoogleLogin from "./Google";

export default function JoinModal() {
  const navigate = useNavigate();

  const userData = useSelector(selector.user.getUserData);

  useEffect(() => {
    if (userData?.message === "닉네임을 설정해 주세요.") {
      navigate("/nickname");
    }

    // TODO 회원가입 이렇게 처리하는게 맞을지

    if (
      userData?.message === "로그인 성공" ||
      userData?.message === "회원가입 성공"
    ) {
      navigate("/");
    }

    // TODO 로그인 필요할 때 로그인 페이지로 라우팅
  }, [navigate, userData]);

  return (
    <div className="max-w-3xl mx-auto my-6 mt-28 w-96">
      <div className="flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none ">
        <div className="flex flex-col items-center justify-center p-5 border-b border-solid rounded-t border-slate-200">
          <h3 className="text-3xl font-semibold text-black">JOIN</h3>

          <p>SNS 계정을 이용해 회원가입 하세요</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border-t border-solid rounded-b border-slate-200">
          <GoogleLogin />
          <a href={KAKAO_AUTH_URL} className="py-2">
            <img src={kakaoLoginImage} width="240px" alt="kakaoLogin" />
          </a>

          <a href={NAVER_AUTH_URL} className="py-2">
            <img src={naverLoginImage} width="240px" alt="naverLogin" />
          </a>
        </div>
      </div>
    </div>
  );
}
