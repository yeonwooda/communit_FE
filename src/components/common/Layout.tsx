import React from "react";
import Header from "../organisms/Header.tsx";
import Container from "./Container.tsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
