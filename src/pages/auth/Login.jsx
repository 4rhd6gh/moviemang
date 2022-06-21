import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import * as actions from "@data/rootActions";
import {
  kakaoLoginImage,
  naverLoginImage,
  googleLoginImage,
} from "@assets/index";
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../../constants/index";
import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();

  // 구글 로그인 구현하는 로직입니다. 테스트하실 때 사용해주세요. post url에 백엔드 쪽으로 요청 보내도록 url 세팅해주시면 됩니다.
  // 구글 서버에 요청 보내는 건 라이브러리에서 해주고, 구글 서버와 통신 성공 했을 때 돌려받은 값을 code 에 담아서 백엔드에 보내는 형태입니다.
  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      console.log(`backend서버에 전달되는 값(credentials): ${code}`);
      const tokens = await axios.post("http://35.203.6.209:8000/auth/login", {
        // http://localhost:3001/auth/google backend that will exchange the code
        code,
      });

      console.log(tokens.data);
    },
    flow: "auth-code",
  });

  useEffect(() => {
    //남아 있는 에러메시지 날리기
    dispatch(actions.user.confirmError());
  }, []);

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
          <div onClick={googleLogin} className="py-2 cursor-pointer">
            <img src={googleLoginImage} width="245px" alt="googleLogin" />
          </div>

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
            className="bg-gray-400 w-60 p-4 rounded-md text-center tracking-wider font-semibold	text-base text-white"
          >
            SNS 간편 회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
