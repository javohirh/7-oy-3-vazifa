// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import RenderSwiper from "../components/RenderSwiper";
import MainSwiper from "../components/MainSwiper";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { request } from "../helpers/Axios";
function Main() {
  return (
    <div className=" mx-auto max-w-[1320px]">
      <MainSwiper />
      <RenderSwiper />
    </div>
  );
}

export default Main;
