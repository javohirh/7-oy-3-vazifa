import React from "react";
import footerLogo from "../assets/images/EMBLEM.svg";
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";
import oferta from "../assets/images/public-ofertka.png";
import reklama from "../assets/images/shining-line.png";
import faq from "../assets/images/faq.png";
import contact from "../assets/images/contact.png";
import kino from "../assets/images/movie.png";
import cinema from "../assets/images/cinema.png";
import consert from "../assets/images/consert.png";
import sport from "../assets/images/sport.png";
import ins from "../assets/images/ins-logo.png";
import face from "../assets/images/face-logo.png";
import you from "../assets/images/you-logo.png";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const { language } = useSelector((store) => store.language);
  const { pathname } = useLocation();
  if (pathname == "/profile") {
    return <></>;
  }
  if (pathname == "/search") {
    return <></>;
  }
  return (
    <div className="bg-[#111111] max-w-[1180px] w-full p-8 mx-auto text-white  ">
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-14">
          <img width={"65px"} src={footerLogo} alt="" />
          <div className="flex items-start justify-between w-full">
            <div>
              <img src={google} alt="" />
              <img className="mt-2" src={apple} alt="" />
            </div>
          </div>
        </div>

        <ul>
          <Link>
            <h2 className="font-medium">О нас</h2>
          </Link>
          <Link>
            <li className="flex my-4 items-center gap-2">
              <img src={oferta} alt="" />
              Публичная оферта
            </li>
          </Link>
          <Link>
            <li className="flex my-4 items-center text-red-500 gap-2">
              <img src={reklama} alt="" />
              Реклама
            </li>
          </Link>
          <Link>
            <li className="flex my-4 items-center gap-2">
              <img src={faq} alt="" />
              F.A.Q
            </li>
          </Link>
          <Link>
            <li className="flex my-4 items-center gap-2">
              <img src={contact} alt="" />
              Контакты
            </li>
          </Link>
        </ul>
        <ul>
          <Link>
            <h2 className="font-medium">Категории</h2>
          </Link>
          <Link>
            <li className="flex my-4 items-center gap-2">
              <img src={kino} alt="" />
              Кино
            </li>
          </Link>
          <Link>
            <li className="flex my-4 items-center text-red-500 gap-2">
              <img src={cinema} alt="" />
              Театр
            </li>
          </Link>
          <Link>
            <li className="flex my-4 items-center gap-2">
              <img src={consert} alt="" />
              Концерты
            </li>
          </Link>
          <Link>
            <li className="flex my-4 items-center gap-2">
              <img src={sport} alt="" />
              Спорт
            </li>
          </Link>
        </ul>
        <ul>
          <Link>
            <h2 className="font-medium">Связаться с нами</h2>
          </Link>
          <Link>
            <li className="flex my-4 items-center gap-2 text-red-500">
              +998 (95) 897-33-38
            </li>
          </Link>
          <Link>
            <li className="flex my-4 items-center  gap-2"></li>
          </Link>
          <Link>
            <li className="flex my-4 items-center gap-2">Социальные сети</li>
          </Link>
          <li className="flex my-4 items-center gap-2">
            <Link>
              <img src={ins} alt="" />
            </Link>
            <Link>
              <img src={face} alt="" />
            </Link>
            <Link>
              {" "}
              <img src={you} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Footer);
