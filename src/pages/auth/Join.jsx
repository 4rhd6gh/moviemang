import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import {
  kakaoLoginImage,
  naverLoginImage,
  googleLoginImage,
} from "@assets/index";
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../../constants/index";

export default function JoinModal() {
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

  return (
    <div className="max-w-3xl mx-auto my-6 mt-28 w-96">
      <div className="flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none ">
        <div className="flex flex-col items-center justify-center p-5 border-b border-solid rounded-t border-slate-200">
          <h3 className="text-3xl font-semibold text-black">JOIN</h3>

          <p>SNS 계정을 이용해 회원가입 하세요</p>
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
      </div>
    </div>
  );
}
