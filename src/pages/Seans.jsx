import { Numbers } from "../components/Numbers";
import { FilterBtn } from "../components/FilterBtn";
import React from "react";
import RenderSwiper from "../components/RenderSwiper";
import { FaInfinity } from "react-icons/fa6";
import { RiMovieLine, RiNeteaseCloudMusicFill } from "react-icons/ri";
import {
  MdOutlineMovieCreation,
  MdOutlineSportsBasketball,
} from "react-icons/md";

import { IoMdGlobe } from "react-icons/io";
import { BsDisplay } from "react-icons/bs";

function Seans() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex items-center justify-between my-12">
        <div className="flex gap-2 max-w-[910px]">
          <FilterBtn color="bg-main-red" text={"Все"}>
            <FaInfinity size={"1.5rem"} />
          </FilterBtn>
          <FilterBtn text={"Кино"}>
            <RiMovieLine size={"1.5rem"} color="#C61F1F" />
          </FilterBtn>
          <FilterBtn text={"Театр"}>
            <MdOutlineMovieCreation size={"1.5rem"} color="#C61F1F" />
          </FilterBtn>
          <FilterBtn text={"Концерты"}>
            <RiNeteaseCloudMusicFill size={"1.5rem"} color="#C61F1F" />
          </FilterBtn>
          <FilterBtn text={"Спорт"}>
            <MdOutlineSportsBasketball size={"1.5rem"} color="#C61F1F" />
          </FilterBtn>
          <FilterBtn text={"Другие"}>
            <IoMdGlobe size={"1.5rem"} color="#C61F1F" />
          </FilterBtn>
        </div>
        <FilterBtn text={"Залы"}>
          <BsDisplay size={"1.5rem"} color="#C61F1F" />
        </FilterBtn>
      </div>

      <RenderSwiper />
      <h2 className="mb-2">Март</h2>
      <div className="flex gap-2 items-center max-w-[1180px] ">
        <div className="flex gap-2 items-center max-w-72 ">
          <Numbers day={"Чт"} date={28} />
          <Numbers day={"Пт"} date={29} />
          <Numbers day={"Сб"} date={30} />
          <Numbers day={"Вс"} date={31} />
        </div>
        <div className="flex relative">
          <h2 className="absolute top-[-52%]">Апрель</h2>
          <div className="flex gap-2 items-center  ">
            <Numbers day={"Пн"} date={1} />
            <Numbers day={"Вт"} date={2} />
            <Numbers day={"Ср"} date={3} />
            <Numbers day={"Чт"} date={4} />
            <Numbers day={"Пт"} date={5} />
            <Numbers day={"Сб"} date={6} />
            <Numbers day={"Вс"} date={7} />
            <Numbers day={"Пн"} date={8} />
            <Numbers day={"Вт"} date={9} />
            <Numbers day={"Ср"} date={10} />
            <Numbers day={"Чт"} date={11} />
            <Numbers day={"Пт"} date={12} />
          </div>
        </div>
      </div>
      <RenderSwiper title="Кино" />
      <RenderSwiper title="Театр" />
      <RenderSwiper title="Мероприятия" />
    </div>
  );
}

export default Seans;
