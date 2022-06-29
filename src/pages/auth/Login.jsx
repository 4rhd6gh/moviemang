import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "@data/rootActions";
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../../constants/index";

import GoogleLogin from "./Google";
import { kakaoLoginImage, naverLoginImage } from "@assets/index";

export default function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    //남아 있는 에러메시지 날리기
    dispatch(actions.user.confirmError());
  }, [dispatch]);

  return (
    <div className="max-w-3xl mx-auto my-6 mt-28 w-96">
      <div className="flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none ">
        <div className="flex flex-col items-center justify-center p-5 border-b border-solid rounded-t border-slate-200">
          <h3 className="text-3xl font-semibold text-center text-black ">
            LOGIN
          </h3>
          <p>SNS 계정을 이용해 로그인 하세요</p>
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
        <div className="flex flex-col items-center justify-center p-6 border-t border-solid rounded-b border-slate-200">
          <Link
            to="/join"
            className="p-4 text-base font-semibold tracking-wider text-center text-white bg-gray-400 rounded-md w-60"
          >
            SNS 간편 회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
