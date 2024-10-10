import React, { useCallback, useState } from "react";
import Inputs from "../components/Inputs";
import ProfileImg from "../components/svgs/Profile";
import { LuPencil } from "react-icons/lu";
import { MdKeyboardArrowRight, MdOutlineEventNote } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { useDispatch } from "react-redux";
import { clearToken } from "../redux/Enter";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExit = useCallback(() => {
    navigate("/");
    setModal(false);
    dispatch(clearToken());
  }, []);

  if (modal) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen bg-[#00000090]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary-gray px-4 py-6 rounded-xl">
          <p className="text-[#A1A1A1] max-w-[205px] mb-6 ps-6">
            Вы уверены, что хотите выйти из аккаунта ?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setModal(false)}
              className="w-[174px] rounded-xl py-4 bg-[#1D1D1D]"
            >
              Отмена
            </button>
            <button
              onClick={handleExit}
              className="w-[174px] rounded-xl py-4 bg-[#C61F1F]"
            >
              Да, выйти
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-[380px] mx-auto mt-12">
      <Inputs>
        <div className="flex items-center gap-2">
          <ProfileImg color={"#C61F1F"} />
          <h2>Мои данные</h2>
        </div>
      </Inputs>
      <p className="text-[#4d4d4d] ps-1 mb-2">Имя пользователя</p>
      <Inputs>
        <div className="flex items-center justify-between">
          <h2>Abdulaziz Abdujalilov</h2>
          <LuPencil color={"#C61F1F"} />
        </div>
      </Inputs>
      <p className="text-[#4d4d4d] ps-1 mb-2">Номер телефона</p>
      <Inputs>
        <div className="flex items-center justify-between">
          <h2>+998 (88) 800-90-00</h2>
          <LuPencil color={"#C61F1F"} />
        </div>
      </Inputs>
      <div className="flex items-center justify-between px-1 v">
        <p className="text-[#4d4d4d] ">Адрес электронной почты</p>
        <p className="text-[#4d4d4d] ">*необязательно</p>
      </div>

      <Inputs>
        <div className="flex items-center justify-between">
          <h2>abdulaziz@tickets.uz</h2>
          <LuPencil color={"#C61F1F"} />
        </div>
      </Inputs>
      <hr className="mb-6" />
      <p className="text-[#4d4d4d] ps-1 mb-2">Документы</p>
      <Inputs>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MdOutlineEventNote color={"#C61F1F"} />
            <h2>Публичная оферта</h2>
          </div>
          <MdKeyboardArrowRight size={"1.5rem"} color={"#C61F1F"} />
        </div>
      </Inputs>
      <Inputs onClick={() => setModal(true)}>
        <div className="flex items-center gap-2">
          <ImExit color={"#C61F1F"} />
          <h2>Выйти из аккаунта</h2>
        </div>
      </Inputs>
    </div>
  );
}

export default Profile;
