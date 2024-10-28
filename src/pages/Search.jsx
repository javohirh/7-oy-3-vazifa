import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { request } from "../helpers/Axios";
import { Link } from "react-router-dom";

function Search() {
  const [searchedFilm, setSearchedFilm] = useState("");
  const [film, setFilm] = useState([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () =>
      await request(
        "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
      ).then((data) => {
        return data.data.results;
      }),
  });
  console.log(data);

  const handleSearch = (e) => {
    setSearchedFilm(e);
    setFilm(
      data.filter((name) =>
        name.title.toUpperCase().includes(searchedFilm.toUpperCase())
      )
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="max-w-[380px] mx-auto mt-12 relative">
        <CiSearch
          className="absolute top-1/2 left-3 translate-y-[-50%]"
          color="#C61F1F"
          size={"1.5rem"}
        />
        <input
          value={searchedFilm}
          onChange={(e) => handleSearch(e.target.value)}
          type="text"
          placeholder="Названия фильма"
          className="text-[#4d4d4d] w-full rounded-xl bg-secondary-gray outline-none py-5 ps-14  "
        />
      </div>
      {searchedFilm.length <= 0 ? (
        <>
          <h2 className="text-[#4d4d4d] text-center mt-[120px]">
            Страница пока пуст
          </h2>
          <h2 className="text-[#4d4d4d] text-center mt-[80px]">
            По вашему запросу ничего не найдена
          </h2>
        </>
      ) : (
        <>
          <div className="flex gap-5 flex-wrap my-12">
            {film.map((movie) => {
              return (
                <div
                  className="film max-w-[580px] w-full flex  gap-5 bg-secondary-gray rounded-xl"
                  key={movie.title}
                >
                  <img
                    className="w-[260px] h-[260px] rounded-md p-2"
                    src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
                    alt=""
                  />
                  <div>
                    <h2 className="font-medium text-2xl mt-6 mb-5">
                      {movie.title}
                    </h2>
                    <p className="text-[#A1A1A1] mb-4">
                      {movie.release_date.slice(0, 4)} •{" "}
                      {movie.original_language.toUpperCase()} • 6+
                    </p>
                    <p className="text-[#A1A1A1] mb-4">1ч 34м / 94 минут</p>
                    <Link to={`/seance/${movie.id}`}>
                      <button className=" mt-10 mb-1 py-4 px-20 bg-main-red rounded-lg ">
                        О фильме
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
