import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./Container";
import DefaultBackgroundImg from "./DefaultBackgroundImg";

export default function PublicLayout() {
  return (
    <>
      <DefaultBackgroundImg />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
