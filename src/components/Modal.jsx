import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import click from "../assets/images/click.png";
import payme from "../assets/images/payme.png";
import ryad from "../assets/images/ryad.png";
function Modal({ randomNumber, data, setModal }) {
  return (
    <div className=" fixed top-0 left-0 w-full h-screen bg-[#00000080]">
      <div className="absolute h-[80vh]  overflow-y-auto  z-30 top-20 p-1 left-1/2 translate-x-[-50%] max-w-[90%] w-full bg-secondary-gray  ">
        <div className="flex items-center justify-between ">
          <button className="p-4 rounded-xl bg-main-gray">
            <IoIosArrowBack color="#C61F1F" size={"2rem"} />
          </button>
          <div>
            {" "}
            <h2 className="font-medium text-2xl mb-1 text-center">Оплата</h2>
            <p className="text-[#A1A1A1] mb-2">Выберите вид оплаты</p>
          </div>
          <button
            onClick={() => setModal(false)}
            className="p-4 rounded-xl bg-main-gray"
          >
            <IoClose color="#C61F1F" size={"2rem"} />
          </button>
        </div>
        <div className="flex bg-[#1D1D1D]  rounded-md max-w-[580px] mx-auto items-center gap-5">
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

            <button className=" gap-2 py-3 px-8 bg-[#2D2D2D] rounded-lg ">
              28 марта, 19:30
            </button>
          </div>
        </div>
        <div className="flex items-center p-5  max-w-[370px] justify-between  bg-main-gray mx-auto mt-8 rounded-lg ">
          <h2 className="font-medium   ">Комиссия сервиса</h2>
          <h2 className="font-medium  ">5 000 сум</h2>
        </div>
        <div className="flex items-center p-5  max-w-[370px] justify-between  bg-main-gray mx-auto mt-3 rounded-lg ">
          <h2 className="font-medium   ">Общая сумма</h2>
          <h2 className="font-medium  ">
            {" "}
            <span className="text-main-red">135 000</span> сум
          </h2>
        </div>
        <p className="text-[#A1A1A1] pt-8 text-center pb-6">
          Выберите способ оплаты
        </p>
        <div className="flex items-center  justify-center  gap-2 mb-16 ">
          <img src={click} alt="" />
          <img src={payme} alt="" />
        </div>
        <hr />
        <div className="flex items-center justify-between m-2">
          <div className="flex itmes-center gap-2">
            <img src={ryad} alt="" />

            <img src={ryad} alt="" />
          </div>
          <button className=" py-6 px-20 bg-main-red rounded-lg ">
            Оплатить
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
