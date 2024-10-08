import { useMask } from "@react-input/mask";
import uz from "../assets/images/UZ.png";
import face from "../assets/images/facebook.png";
import google from "../assets/images/google-login.png";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { getToken } from "../redux/Enter";
function Login() {
  // const [tocen, setTocen] = useState(sessionStorage.getItem("token"));
  const inputRef = useMask({
    mask: "+___ __ ___-__-__",
    replacement: { _: /\d/ },
  });
  const { login } = useSelector((store) => store.enter);
  // const getToken = () => {
  //   fetch("https://fakestoreapi.com/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "Application/json",
  //     },
  //     body: JSON.stringify({
  //       username: "mor_2314",
  //       password: "83r5^_",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       sessionStorage.setItem("token", json.token);
  //       setTocen(json.token);
  //     });
  // };

  return (
    <div className="mt-12">
      <h2 className="text-2xl text-center">Регистрация</h2>
      <p className="text-center text-gray-700 mt-4">
        Введите номер телефона для того чтобы войти или пройти регистрацию
      </p>
      <div className="mt-8 relative">
        <img className="absolute top-5 left-3" src={uz} alt="" />
        <input
          required
          className="text-base text-center w-full bg-secondary-gray p-5 rounded-xl outline-none"
          ref={inputRef}
        />
        <NavLink to={"check"}>
          <button className="bg-main-red p-5 w-full rounded-xl mt-6">
            Регистрация
          </button>
        </NavLink>
      </div>
      <p className="text-center text-gray-700 my-4">или</p>
      <div className="flex items-center gap-2 justify-center">
        <img src={face} alt="" />
        <img src={google} alt="" />
      </div>
    </div>
  );
}

export default Login;
