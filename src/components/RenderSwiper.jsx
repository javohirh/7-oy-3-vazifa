import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useFetch } from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import { request } from "../helpers/Axios";
import { useQuery } from "@tanstack/react-query";

function RenderSwiper({ title = "На неделе" }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () =>
      await request(
        "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
      ).then((data) => {
        return data.data.results;
      }),
  });
  // console.log(data);

  const path = useLocation();

  const randomNumber = Math.round(Math.random() * 18 + 1);
  const randomNumber2 = Math.round(Math.random() * 18 + 1);
  const randomNumber3 = Math.round(Math.random() * 18 + 1);
  const randomNumber4 = Math.round(Math.random() * 18 + 1);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2 className="">{error}</h2>
      ) : (
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
          >
            {data && (
              <>
                <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] max-w-[300px]  ">
                  <div className="relative h-full">
                    <Link
                      to={
                        path.pathname === "/"
                          ? `Сеансы/${data[randomNumber].id}`
                          : `${data[randomNumber].id}`
                      }
                    >
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500/" +
                          data[randomNumber].poster_path
                        }
                        className="w-full h-full"
                        alt=""
                      />
                    </Link>
                    <div className="absolute top-[390px] left-0  z-10">
                      <h4 className="font-medium text-2xl max-w-[280px]">
                        {data[randomNumber].title}{" "}
                        {data[randomNumber].original_language}
                      </h4>
                      <p className="text-[#4D4D4D] text-sm">Комедия, Фэнтези</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] max-w-[300px]  ">
                  <div className="relative h-full">
                    <Link
                      to={
                        path.pathname === "/"
                          ? `Сеансы/${data[randomNumber2].id}`
                          : `${data[randomNumber2].id}`
                      }
                    >
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500/" +
                          data[randomNumber2].poster_path
                        }
                        className="w-full h-full"
                        alt=""
                      />
                    </Link>
                    <div className="absolute top-[390px] left-0  z-10">
                      <h4 className="font-medium text-2xl max-w-[280px]">
                        {data[randomNumber2].title}{" "}
                        {data[randomNumber2].original_language}
                      </h4>
                      <p className="text-[#4D4D4D] text-sm">Комедия, Фэнтези</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] max-w-[300px]  ">
                  <div className="relative h-full">
                    <Link
                      to={
                        path.pathname === "/"
                          ? `Сеансы/${data[randomNumber3].id}`
                          : `${data[randomNumber3].id}`
                      }
                    >
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500/" +
                          data[randomNumber3].poster_path
                        }
                        className="w-full h-full"
                        alt=""
                      />
                    </Link>
                    <div className="absolute top-[390px] left-0  z-10">
                      <h4 className="font-medium text-2xl max-w-[280px]">
                        {data[randomNumber3].title}{" "}
                        {data[randomNumber3].original_language}
                      </h4>
                      <p className="text-[#4D4D4D] text-sm">Комедия, Фэнтези</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] max-w-[300px]  ">
                  <div className="relative h-full">
                    <Link
                      to={
                        path.pathname === "/"
                          ? `Сеансы/${data[randomNumber4].id}`
                          : `${data[randomNumber4].id}`
                      }
                    >
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500/" +
                          data[randomNumber4].poster_path
                        }
                        className="w-full h-full"
                        alt=""
                      />
                    </Link>
                    <div className="absolute top-[390px] left-0  z-10">
                      <h4 className="font-medium text-2xl max-w-[280px]">
                        {data[randomNumber4].title}{" "}
                        {data[randomNumber4].original_language}
                      </h4>
                      <p className="text-[#4D4D4D] text-sm">Комедия, Фэнтези</p>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </>
      )}
    </>
  );
}

export default RenderSwiper;
