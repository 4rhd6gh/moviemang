import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import * as selector from "@data/rootSelectors";

import Container from "./Container";
import DefaultBackgroundImg from "./DefaultBackgroundImg";

export default function AuthLayout() {
  const navigate = useNavigate();

  const userData = useSelector(selector.user.getUserData);

  useEffect(() => {
    console.log(userData);
    if (userData?.message === "닉네임을 설정해 주세요.") {
      navigate("/nickname");
    }

    // TODO 회원가입 이렇게 처리하는게 맞을지

    // TODO 로그인 필요할 때 로그인 페이지로 라우팅
  }, [navigate, userData]);

  return (
    <>
      <DefaultBackgroundImg />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
