import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useFetch } from "../hooks/useFetch";

function RenderSwiper({ title = "На неделе" }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDZkYmM5MDY3OTNhNjI0YjM3YjRmODI5NzI5Yjc5NiIsIm5iZiI6MTcyNzE1NTUyNS41Njk5ODUsInN1YiI6IjY2ZjI0YTQ0NTgzYzU2Y2RiMTI2NDkwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1QLjfSIklbzHk3FuKPWQN6z1hh-hHYFjRIXWjGokQA",
    },
  };
  const newMovies = {};
  fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  )
    .then((response) => response.json())
    .then((response) => (newMovies = response))
    .catch((err) => console.error(err));
  const { movies, loading, error } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );
  const randomNumber = Math.round(Math.random() * 18 + 1);
  const randomNumber2 = Math.round(Math.random() * 18 + 1);
  const randomNumber3 = Math.round(Math.random() * 18 + 1);
  const randomNumber4 = Math.round(Math.random() * 18 + 1);

  return (
    <>
      <div className="flex items-center justify-between my-4 max-w-[1000px] mx-auto mt-12">
        <p>{title}</p>
        <p className="text-red-600">Показать все </p>
      </div>
      <Swiper
        className="max-w-[1100px] w-fu mx-auto render-swiper pb-32 "
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {movies
          ? movies
          : newMovies && (
              <>
                <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] max-w-[300px]  ">
                  <div className="relative h-full">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" +
                        movies.results[randomNumber].poster_path
                      }
                      className="w-full h-full"
                      alt=""
                    />
                    <div className="absolute top-[390px] left-0  z-10">
                      <h4 className="font-medium text-2xl max-w-[280px]">
                        {movies.results[randomNumber].title}{" "}
                        {movies.results[randomNumber].original_language}
                      </h4>
                      <p className="text-[#4D4D4D] text-sm">Комедия, Фэнтези</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] max-w-[300px]  ">
                  <div className="relative h-full">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" +
                        movies.results[randomNumber2].poster_path
                      }
                      className="w-full h-full"
                      alt=""
                    />
                    <div className="absolute top-[390px] left-0  z-10">
                      <h4 className="font-medium text-2xl max-w-[280px]">
                        {movies.results[randomNumber2].title}{" "}
                        {movies.results[randomNumber2].original_language}
                      </h4>
                      <p className="text-[#4D4D4D] text-sm">Комедия, Фэнтези</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] max-w-[300px]  ">
                  <div className="relative h-full">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" +
                        movies.results[randomNumber3].poster_path
                      }
                      className="w-full h-full"
                      alt=""
                    />
                    <div className="absolute top-[390px] left-0  z-10">
                      <h4 className="font-medium text-2xl max-w-[280px]">
                        {movies.results[randomNumber3].title}{" "}
                        {movies.results[randomNumber3].original_language}
                      </h4>
                      <p className="text-[#4D4D4D] text-sm">Комедия, Фэнтези</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] max-w-[300px]  ">
                  <div className="relative h-full">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" +
                        movies.results[randomNumber4].poster_path
                      }
                      className="w-full h-full"
                      alt=""
                    />
                    <div className="absolute top-[390px] left-0  z-10">
                      <h4 className="font-medium text-2xl max-w-[280px]">
                        {movies.results[randomNumber4].title}{" "}
                        {movies.results[randomNumber4].original_language}
                      </h4>
                      <p className="text-[#4D4D4D] text-sm">Комедия, Фэнтези</p>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            )}
      </Swiper>
    </>
  );
}

export default RenderSwiper;
