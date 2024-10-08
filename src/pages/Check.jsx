import React, { useState, useEffect } from "react";
// import OtpInput from "react-otp-input";

import { OTP } from "react-custom-otp";
import "react-custom-otp/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "../redux/Enter";

function Check() {
  const [stringCode, setStringCode] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmitOTP = () => {
    if (stringCode.length >= 4) {
      navigate("/");

      dispatch(getToken());
    }
  };

  function TimerComponent() {
    const [timer, setTimer] = useState(60);

    useEffect(() => {
      if (timer > 0) {
        const timeID = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(timeID);
      }
    }, [timer]);

    return <span>{timer}</span>;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl text-center">Введите СМС-код</h2>
      <p className="text-center text-gray-700 mt-4">
        Введите СМС-код, который мы отправили на номер{" "}
        <span className="text-main-red">+998 88 800 90 00</span>
      </p>
      <div className="mx-auto  my-6">
        <OTP
          containerClasses="flex-nowrap  "
          inputsClasses="bg-main-gray w-[89px] h-[60px] rounded-xl text-white outline-none focus:border-none"
          setSubmitStatus={handleSubmitOTP}
          separator={<span className="ms-2"></span>}
          className="bg-main-gray flex text-white"
          setStringCode={setStringCode}
          inputsNumber={4}
        />
      </div>
      <p className="text-center text-gray-700 my-4">
        Отправить код еще раз –
        <span className="text-main-red ms-2">
          0:
          <TimerComponent />
        </span>
      </p>
    </div>
  );
}

export default Check;
