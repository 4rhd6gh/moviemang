import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./Container";

export default function PublicLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
