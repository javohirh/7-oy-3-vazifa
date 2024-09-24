import React from "react";
import Header from "../pages/Header";
import { NavLink, Outlet } from "react-router-dom";
import back from "../assets/images/back-to.png";

function LoginLayout() {
  return (
    <div className=" min-h-screen ">
      <Header />
      <NavLink className={"absolute top-[128px] left-[120px]"} to={"/"}>
        {" "}
        <img src={back} alt="" />
      </NavLink>
      <div className="max-w-[380px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default LoginLayout;
