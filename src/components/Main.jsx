// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slide1 from "../assets/images/po-2.png";
import btnIcon from "../assets/images/button-icon.png";
// import prevBtn from "../assets/images/swiper-prev.png";
// import nextBnt from "../assets/images/swiper-next.png";

function Main() {
  return (
    <div className=" mx-auto max-w-[1320px]">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="relative">
          <img src={slide1} alt="" />
          <div className="absolute bottom-4 z-10 left-[50%] translate-x-[-50%]">
            <h2 className="text-4xl font-medium text-center">
              Kung Fu Panda 4
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
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-between my-4 max-w-[1000px] mx-auto">
        <p>На неделе</p>
        <p className="text-red-600">Показать все</p>
      </div>
      <Swiper
        className="max-w-[1100px] mx-auto pb-32 "
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] w-[300px]  ">
          <div className="relative">
            <div className="absolute top-[390px] left-0  z-10">
              <h4 className="font-medium text-2xl max-w-[280px]">
                Kung Fu Panda 4 ENGLISH
              </h4>
              <p className="text-[#4D4D4D] text-sm">Комедия, Фэнтези</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] w-[300px]  ">
          <div className="relative">
            <div className="absolute top-[390px] left-0  z-10">
              <h4 className="font-medium text-2xl max-w-[280px]">
                Dune 2 – EN
              </h4>
              <p className="text-[#4D4D4D] text-sm">Фантастика, Боевик</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] w-[300px]  ">
          <div className="relative">
            <div className="absolute top-[390px] left-0  z-10">
              <h4 className="font-medium text-2xl max-w-[280px]">Дюна – RU</h4>
              <p className="text-[#4D4D4D] text-sm">Фантастика, Боевик</p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="h-96 rounded-md bg-[#1D1D1D] w-[300px]  ">
          <div className="relative">
            <div className="absolute top-[390px] left-0  z-10">
              <h4 className="font-medium text-2xl max-w-[280px]">
                Kung Fu Panda 4 RUSSIAN
              </h4>
              <p className="text-[#4D4D4D] text-sm">Комедия, Фэнтези</p>
            </div>
          </div>
        </SwiperSlide>{" "}
      </Swiper>
    </div>
  );
}

export default Main;
