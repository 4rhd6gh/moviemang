import React from "react";
import { useEffect } from "react";

const Naver = () => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => console.log(code), []);

  return <p className="text-white text-center">naver 로그인 완료</p>;
};

export default Naver;

// https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=P9wXmSD_A0d2dUt21vm0&client_secret=YIYyWZR319&code=ZwTYFaeYyChvfVTRN6&state=accc
