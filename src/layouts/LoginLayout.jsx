import React from "react";
import Header from "../pages/Header";
import { NavLink, Outlet } from "react-router-dom";
import back from "../assets/images/back-to.png";

function LoginLayout() {
  return (
    <div className=" min-h-screen relative ">
      <Header />
      <NavLink className={"absolute top-[128px] left-[120px]"} to={"/"}>
        {" "}
        <img src={back} alt="" />
      </NavLink>
      <div className="max-w-[380px] mx-auto">
        <Outlet />
      </div>
      <p className="max-w-[360px] text-center text-gray-700 absolute left-2/4 translate-x-[-50%] bottom-6 ">
        Нажимая на кнопку "Регистрация" Вы соглашаетесь с{" "}
        <span className="text-main-red"> “Универсальным договором”</span>
      </p>
    </div>
  );
}

export default LoginLayout;
