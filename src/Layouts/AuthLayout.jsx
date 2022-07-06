import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import * as selector from "@data/rootSelectors";

import Container from "./Container";
import DefaultBackgroundImg from "./DefaultBackgroundImg";

export default function AuthLayout() {
  const navigate = useNavigate();

  const userData = useSelector(selector.user.getUserData);

  const userToken = localStorage.getItem("Is");

  useEffect(() => {
    if (userData?.message === "닉네임을 설정해 주세요.") {
      navigate("/nickname");
    }
    // TODO 접근 못하는 페이지인 경우 보여줄 페이지?
    if (!userToken) {
      navigate("/login");
    }
  }, [navigate, userData, userToken]);

  if (!userToken) {
    return null;
  }

  return (
    <>
      <DefaultBackgroundImg />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
