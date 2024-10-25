import logo from "../assets/images/main-logo.svg";
import React from "react";

import { NavLink } from "react-router-dom";
import { Afisha, Seans, Bilet, Search, Profile } from "../components/svgs";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/LanguageRedux.jsx/Language";

import Flag from "react-world-flags";

const images = [
  { img: <Afisha />, text: "Афиша", path: "/" },
  { img: <Seans />, text: "Сеансы", path: "/seance" },
  { img: <Bilet />, text: "Билеты", path: "/bilet" },
  { img: <Search />, text: "Поиск", path: "/search" },
];

function Header() {
  const { language } = useSelector((store) => store.language);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const { login } = useSelector((store) => store.enter);

  return (
    <div className="flex items-center justify-between max-w-[1200px] mx-auto my-4">
      <NavLink to={"/"}>
        <img className="me-4" width={178} src={logo} alt="" />
      </NavLink>
      <div className="flex items-center gap-6 text-center justify-center">
        {images.map((image, i) => {
          return (
            <NavLink
              to={image.path}
              key={i}
              className="flex flex-col items-center justify-center"
            >
              {image.img}
              <p className="mt-1  ">{image.text}</p>
            </NavLink>
          );
        })}
      </div>
      <div className="flex items-center ">
        <div className="relative">
          <div className="absolute top-[50%] left-1 w-6 h-6 rounded-full overflow-hidden translate-y-[-50%] border border-gray-300">
            <Flag code={language} className="object-cover w-full h-full" />
          </div>

          <select
            value={language}
            onChange={(e) => handleChange(e)}
            className="bg-[#1D1D1D80] w-[92px] h-[42px] p-3 ps-6 rounded-xl  text-center"
          >
            <option value="uz">UZ</option>
            <option value="us">EN</option>
            <option value="ru">RU</option>
          </select>
        </div>
        {login ? (
          <NavLink
            to={"profile"}
            className="ms-8 flex flex-col justify-center items-center"
          >
            <Profile />

            <p className="mt-1">Профиль</p>
          </NavLink>
        ) : (
          <NavLink to={"login"}>
            <button className="w-44 h-14 bg-[#C61F1F] ms-2 rounded-xl">
              Войти
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
