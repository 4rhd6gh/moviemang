import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import * as selector from "@data/rootSelectors";

import Container from "./Container";
import DefaultBackgroundImg from "./DefaultBackgroundImg";

export default function PublicLayout() {
  const userData = useSelector(selector.user.getUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.message === "닉네임을 설정해 주세요.") {
      navigate("/nickname");
    }
    if (
      userData?.message === "로그인 성공" ||
      userData?.message === "회원가입 성공"
    ) {
      navigate("/");
    }
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
