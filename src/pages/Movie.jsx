import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import btnIcon from "../assets/images/button-icon.png";
import { Numbers } from "../components/Numbers";
import { FaCrown } from "react-icons/fa6";
import IMDB from "../assets/images/IMDB.png";
import kinopoisk from "../assets/images/kinopoisk.png";
import { MdLocalMovies } from "react-icons/md";
import RenderSwiper from "../components/RenderSwiper";
import { request } from "../helpers/Axios";

function Movie() {
  const tickets = [1, 2, 3, 4, 5, 6, 7, 8];
  const tickets2 = [1, 2, 3, 4, 5];
  const { id } = useParams();
  const [tab, setTab] = useState(1);
  const { movies, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b46dbc906793a624b37b4f829729b796`
  );

  return (
    <div className="mx-auto max-w-[1320px] ">
      <div className="relative">
        <img
          className="rounded-xl h-[580px] mx-auto"
          width={"100%"}
          src={`https://image.tmdb.org/t/p/w780/${movies.poster_path}`}
          alt=""
        />
        <div className="absolute bottom-7 z-10 left-[50%] translate-x-[-50%]">
          <h2 className="text-4xl font-medium text-center">{movies.title}</h2>
          <p className="text-center my-3 text-slate-200">
            2024 • Комедия • 1ч 34м • EN • 6+
          </p>
          <button className="mx-auto flex items-center justify-center gap-3 w-80 h-12 bg-white rounded-md text-red-600">
            {" "}
            <img src={btnIcon} alt="" /> Смотреть
          </button>
        </div>
      </div>
      <button className="w-[380px] rounded-xl flex items-center m-auto my-12 bg-secondary-gray">
        <button
          onClick={() => setTab(1)}
          className={` ${
            tab === 1 ? "bg-main-gray text-main-red" : ""
          } w-1/2 rounded-xl text-center py-4 `}
        >
          Билеты
        </button>
        <button
          onClick={() => setTab(2)}
          className={` ${
            tab === 2 ? "bg-main-gray text-main-red" : ""
          } w-1/2 rounded-xl text-center py-4 `}
        >
          О фильме
        </button>
      </button>

      {tab === 1 ? (
        <>
          <div className="flex justify-between items-center max-w-[1180px] relative mx-auto mb-12">
            <h2 className=" absolute top-[-52%]">Март</h2>
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

          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-2xl mb-2">Cinematica</h2>
            <p className="text-text-gray mb-6">
              {" "}
              7, Улица Алмазар​, Шайхантахурский район
            </p>
            <div className="flex items-center flex-wrap gap-5">
              {tickets.map((ticket) => {
                return (
                  <div
                    key={ticket}
                    className="w-[180px] bg-secondary-gray rounded-xl overflow-hidden  "
                  >
                    <p className="text-text-gray p-3">Зал № 1</p>
                    <div className="flex px-3 mb-1 justify-between">
                      <h2>11:45</h2>
                      <h2 className="flex items-center gap-2">
                        VIP <FaCrown size={"1.5rem"} color="#C61F1F" />
                      </h2>
                    </div>
                    <div className="bg-[#2D2D2D] flex justify-between px-3 py-2 ">
                      <h2>3D</h2>
                      <h2>100 000 сум</h2>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className="my-12" />
            <h2 className="text-2xl mb-2">Magic Cinema</h2>
            <p className="text-text-gray mb-6">
              174/12, Улица Бабура, Чиланзарский район
            </p>
            <div className="flex items-center flex-wrap gap-5  mb-[240px]">
              {tickets2.map((ticket) => {
                return (
                  <div
                    key={ticket}
                    className="w-[180px] bg-secondary-gray rounded-xl overflow-hidden  "
                  >
                    <p className="text-text-gray p-3">Зал № 1</p>
                    <div className="flex px-3 mb-1 justify-between">
                      <h2>11:45</h2>
                      <h2 className="flex items-center gap-2">
                        VIP <FaCrown size={"1.5rem"} color="#C61F1F" />
                      </h2>
                    </div>
                    <div className="bg-[#2D2D2D] flex justify-between px-3 py-2 ">
                      <h2>3D</h2>
                      <h2>100 000 сум</h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="max-w-[380px] mx-auto mb-[240px]">
            <div className="flex justify-between my-12">
              <img src={IMDB} alt="" />
              <img src={kinopoisk} alt="" />
            </div>
            <h2 className="text-2xl mb-6">Детали</h2>
            <div className="text-[#A1A1A1] ">
              <div className=" mb-[18px]  flex justify-between">
                <p>Продолжительность</p>
                <p>1ч 34м / 94 минут</p>
              </div>
              <div className=" mb-[18px]  flex justify-between">
                <p>Премьера</p>
                <p> 07 марта 2024</p>
              </div>
              <div className=" mb-[18px]  flex justify-between">
                <p>Производство</p>
                <p>США, Китай</p>
              </div>
              <div className=" mb-[18px]  flex justify-between">
                <p>Жанр</p>
                <p>Фэнтези, Комедия</p>
              </div>
              <div className=" mb-[18px]  flex justify-between">
                <p>Режиссер</p>
                <p>Майк Митчелл, Стефани Стайн</p>
              </div>
              <div className=" mb-[18px]  flex justify-between">
                <p>Возрастной рейтинг</p>
                <p>6+</p>
              </div>
            </div>
            <hr className="my-8" />
            <h2 className="text-2xl mb-6">В ролях</h2>
            <div className="text-[#A1A1A1] ">
              <div className=" mb-[18px]  flex justify-between">
                <p>Джек Блэк</p>
                <p>Аквафина</p>
              </div>
              <div className=" mb-[18px]  flex justify-between">
                <p>Виола Дэвис</p>
                <p> Дастин Хоффман</p>
              </div>
              <div className=" mb-[18px]  flex justify-between">
                <p>Джеймс Хун</p>
                <p>Брайан Крэнстон</p>
              </div>
              <div className=" mb-[18px]  flex justify-between">
                <p>Иэн Макшейн</p>
                <p>Ке Хюи Куан</p>
              </div>
              <div className=" mb-[18px]  flex justify-between">
                <p>Ронни Чиэн</p>
                <p>Лори Тань Чинн</p>
              </div>
            </div>
            <hr className="my-8" />
            <h2 className="text-2xl mb-6">Сюжет</h2>
            <p className="max-w-[90%] mt-6 mb-12 text-text-gray">
              Продолжение приключений легендарного Воина Дракона, его верных
              друзей и наставника (часть вторая)
            </p>
            <button className="bg-main-red w-full py-4 text-base font-medium flex justify-center items-center gap-1 rounded-xl">
              {" "}
              <MdLocalMovies color="#fff" />
              Купить билет
            </button>
          </div>
          <RenderSwiper />
        </div>
      )}
    </div>
  );
}

export default Movie;
