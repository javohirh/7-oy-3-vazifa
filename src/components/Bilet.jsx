import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../helpers/Axios";
import { FaCheck } from "react-icons/fa6";

function Bilet({ tab = 1 }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: async () =>
      await request(
        "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
      ).then((data) => {
        return data.data.results;
      }),
  });
  const randomNumber = Math.round(Math.random() * 18 + 1);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {data && (
        <div className="bg-[#1D1D1D] rounded-xl max-w-[580px] mx-auto my-4">
          <div className="flex items-center gap-5">
            <img
              className="h-[260px] w-[260px] rounded-xl p-2 "
              src={
                "https://image.tmdb.org/t/p/w500/" +
                data[randomNumber].poster_path
              }
              alt=""
            />
            <div className="mb-3">
              <h2 className="font-medium text-2xl mb-5 ">
                {data[randomNumber].title}
              </h2>
              <p className="text-[#A1A1A1] mb-4">
                2024 • RU • 6+ • 1ч 34м / 94 минут
              </p>
              <h3 className="font-medium text-sm mb-3">Magic Cinema</h3>
              <h3 className="font-medium text-sm mb-3">Зал №1</h3>
              <h3 className="font-medium text-sm mb-3">28 марта, 19:30</h3>
              <button className="flex items-center gap-2 py-3 px-8 bg-[#2D2D2D] rounded-lg ">
                {" "}
                <FaCheck />
                Оплачено
              </button>
            </div>
          </div>
          {tab == 1 && (
            <>
              <hr className="my-2" />
              <div className="flex items-center justify-between p-3">
                <h2>Ваш билет бронирован</h2>
                <button className=" py-4 px-20 bg-main-red rounded-lg ">
                  Получить билет
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Bilet;
