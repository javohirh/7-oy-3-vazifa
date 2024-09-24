import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import slide1 from "../assets/images/po-2.png";
import btnIcon from "../assets/images/button-icon.png";
import { useFetch } from "../hooks/useFetch";
function MainSwiper() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDZkYmM5MDY3OTNhNjI0YjM3YjRmODI5NzI5Yjc5NiIsIm5iZiI6MTcyNzE1NTUyNS41Njk5ODUsInN1YiI6IjY2ZjI0YTQ0NTgzYzU2Y2RiMTI2NDkwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1QLjfSIklbzHk3FuKPWQN6z1hh-hHYFjRIXWjGokQA",
    },
  };

  const { movies, loading, error } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );

  console.log(movies);

  return (
    <Swiper
      className="main-swiper h-[700px]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="relative">
        <img src={slide1} alt="" />
        <div className="absolute bottom-32 z-10 left-[50%] translate-x-[-50%]">
          <h2 className="text-4xl font-medium text-center">Kung Fu Panda 4</h2>
          <p className="text-center my-3 text-slate-200">
            2024 • Комедия • 1ч 34м • EN • 6+
          </p>
          <button className="mx-auto flex items-center justify-center gap-3 w-80 h-12 bg-white rounded-md text-red-600">
            {" "}
            <img src={btnIcon} alt="" /> Смотреть
          </button>
        </div>
      </SwiperSlide>
      {movies.results && (
        <>
          <SwiperSlide className="h-[580px] relative">
            <img
              className="rounded-xl h-[580px]"
              width={"100%"}
              src={
                "https://image.tmdb.org/t/p/w500/" +
                movies.results[3].poster_path
              }
              alt=""
            />
            <div className="absolute bottom-4 z-10 left-[50%] translate-x-[-50%]">
              <h2 className="text-4xl font-medium text-center">
                {movies.results[3].title}
              </h2>
              <p className="text-center my-3 text-slate-200">
                2024 • Комедия • 1ч 34м • EN • 6+
              </p>
              <button className="mx-auto flex items-center justify-center gap-3 w-80 h-12 bg-white rounded-md text-red-600">
                {" "}
                <img src={btnIcon} alt="" /> Смотреть
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[580px] relative">
            <img
              className="rounded-xl h-[580px]"
              width={"100%"}
              src={
                "https://image.tmdb.org/t/p/w500/" +
                movies.results[5].poster_path
              }
              alt=""
            />
            <div className="absolute bottom-4 z-10 left-[50%] translate-x-[-50%]">
              <h2 className="text-4xl font-medium text-center">
                {movies.results[5].title}
              </h2>
              <p className="text-center my-3 text-slate-200">
                2024 • Комедия • 1ч 34м • EN • 6+
              </p>
              <button className="mx-auto flex items-center justify-center gap-3 w-80 h-12 bg-white rounded-md text-red-600">
                {" "}
                <img src={btnIcon} alt="" /> Смотреть
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[580px] relative">
            <img
              className="rounded-xl bg-cover h-[580px]"
              width={"100%"}
              src={
                "https://image.tmdb.org/t/p/w500/" +
                movies.results[15].poster_path
              }
              alt=""
            />
            <div className="absolute bottom-4 z-10 left-[50%] translate-x-[-50%]">
              <h2 className="text-4xl font-medium text-center">
                {movies.results[15].title}
              </h2>
              <p className="text-center my-3 text-slate-200">
                2024 • Комедия • 1ч 34м • EN • 6+
              </p>
              <button className="mx-auto flex items-center justify-center gap-3 w-80 h-12 bg-white rounded-md text-red-600">
                {" "}
                <img src={btnIcon} alt="" /> Смотреть
              </button>
            </div>
          </SwiperSlide>
        </>
      )}
    </Swiper>
  );
}

export default MainSwiper;
