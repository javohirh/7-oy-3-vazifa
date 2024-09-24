import logo from "../assets/images/main-logo.svg";
import afisha from "../assets/images/afisha.svg";
import seans from "../assets/images/tablet-line.svg";
import bilet from "../assets/images/bilet.svg";
import search from "../assets/images/search.svg";
import profile from "../assets/images/Profile_Icon.svg";

const images = [
  { img: afisha, text: "Афиша" },
  { img: seans, text: "Сеансы" },
  { img: bilet, text: "Билеты" },
  { img: search, text: "Поиск" },
];
import ru from "../assets/images/RU.svg";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="flex items-center justify-between max-w-[1000px] mx-auto my-4">
      <NavLink to={"/"}>
        <img src={logo} alt="" />
      </NavLink>
      <div className="flex items-center gap-4 text-center justify-center">
        {images.map((image, i) => {
          return (
            <NavLink to={image.text} key={i}>
              <img className="block mx-auto h-5" src={image.img} alt="" />
              <p className="mt-1">{image.text}</p>
            </NavLink>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <img
            className="absolute top-[57%] left-1 translate-y-[-50%]"
            src={ru}
            alt=""
          />
          <select className="bg-[#1D1D1D80] w-[92px] h-[42px] p-3  text-center">
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="uz">UZ</option>
          </select>
        </div>
        {sessionStorage.getItem("token") ? (
          <NavLink to={"profile"} className="ms-8">
            <img className="block mx-auto h-5" src={profile} alt="" />
            <p className="mt-1">Профиль</p>
          </NavLink>
        ) : (
          <NavLink to={"login"}>
            <button className="w-44 h-14 bg-[#C61F1F] rounded-xl">Войти</button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;