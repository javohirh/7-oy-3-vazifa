import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slide1 from "../assets/images/po-2.png";
import btnIcon from "../assets/images/button-icon.png";
import { useFetch } from "../hooks/useFetch";

function MainSwiper() {
  const { movies, loading, error } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );

  return (
    <Swiper
      className="main-swiper h-[700px]"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Added Autoplay module
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay with a 3-second delay
    >
      <SwiperSlide className="relative h-[580px]">
        <img src={slide1} alt="" className="slide-image h-full" />
        <div className="absolute bottom-5 z-10 left-[50%] translate-x-[-50%]">
          <h2 className="text-4xl font-medium text-center">Kung Fu Panda 4</h2>
          <p className="text-center my-3 text-slate-200">
            2024 • Комедия • 1ч 34м • EN • 6+
          </p>
          <button className="mx-auto flex items-center justify-center gap-3 w-80 h-12 bg-white rounded-md text-red-600">
            <img src={btnIcon} alt="" /> Смотреть
          </button>
        </div>
        {/* Add the animated thumbnail or navigation image */}
      </SwiperSlide>

      {movies.results && (
        <>
          {movies.results.slice(3, 6).map((movie, index) => (
            <SwiperSlide className="relative h-[580px]" key={index}>
              <img
                className="rounded-xl h-full slide-image"
                width={"100%"}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="absolute bottom-5 z-10 left-[50%] translate-x-[-50%]">
                <h2 className="text-4xl font-medium text-center">
                  {movie.title}
                </h2>
                <p className="text-center my-3 text-slate-200">
                  2024 • Комедия • 1ч 34м • EN • 6+
                </p>
                <button className="mx-auto flex items-center justify-center gap-3 w-80 h-12 bg-white rounded-md text-red-600">
                  <img src={btnIcon} alt="" /> Смотреть
                </button>
              </div>
            </SwiperSlide>
          ))}
        </>
      )}
    </Swiper>
  );
}

export default MainSwiper;
