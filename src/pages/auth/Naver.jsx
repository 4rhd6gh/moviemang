import { useDispatch } from "react-redux";

import * as action from "@data/rootActions";

const Naver = () => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  const dispatch = useDispatch();

  const sendAuthRequest = async () => {
    console.log(code);
    const response = await dispatch(
      action.user.snsLogin({
        code,
        loginType: "naver",
      })
    );

    return response?.data;
  };

  sendAuthRequest();

  return <p className="text-center text-white">naver 로그인 완료</p>;
};

export default Naver;

// https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=P9wXmSD_A0d2dUt21vm0&client_secret=YIYyWZR319&code=ZwTYFaeYyChvfVTRN6&state=accc
