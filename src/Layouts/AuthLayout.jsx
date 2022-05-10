import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./Container";
import DefaultBackgroundImg from "./DefaultBackgroundImg";

export default function AuthLayout() {
  return (
    <>
      <DefaultBackgroundImg />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
