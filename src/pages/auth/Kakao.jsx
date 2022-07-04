import { useDispatch } from "react-redux";

import * as action from "@data/rootActions";
import { useNavigate } from "react-router-dom";

const Kakao = () => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendAuthRequest = async () => {
    await dispatch(
      action.user.snsLogin(
        {
          code,
          loginType: "kakao",
        },
        navigate
      )
    );
  };

  sendAuthRequest();

  return <p className="text-center text-white">kakao 로그인 완료 </p>;
};

export default Kakao;

// https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=7b3b8e4bac82885a106b3d0eac76cd86&redirect_uri=http://localhost:3000/oauth/kakao&code=94u0IJe9cP4SCB9LS25Bti06fEJfpGk69W2kBsRD7uS49ObKXOs-f-ntnBRoSna3c3TsKQo9c00AAAGBcgNtxA
