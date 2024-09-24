import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";

function Check() {
  const [otp, setOtp] = useState("");

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
      <div className="mx-auto w-24 my-6">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span className="ms-2"></span>}
          renderInput={(props) => (
            <input
              style={{ width: "20px", color: "#000" }}
              className="w-20 p-3 custom-input"
              {...props}
            />
          )}
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
