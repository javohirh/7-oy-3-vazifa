import logo from "../assets/images/main-logo.svg";
import afisha from "../assets/images/afisha.svg";
import seans from "../assets/images/tablet-line.svg";
import bilet from "../assets/images/bilet.svg";
import search from "../assets/images/search.svg";
const images = [
  { img: afisha, text: "Афиша" },
  { img: seans, text: "Сеансы" },
  { img: bilet, text: "Билеты" },
  { img: search, text: "Поиск" },
];
import ru from "../assets/images/RU.svg";
function Header() {
  return (
    <div className="flex items-center justify-between max-w-[1000px] mx-auto my-4">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center gap-4 text-center justify-center">
        {images.map((image, i) => {
          return (
            <div key={i}>
              <img className="block mx-auto h-5" src={image.img} alt="" />
              <p className="mt-1">{image.text}</p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <img
            className="absolute top-[57%] left-1 translate-y-[-50%]"
            src={ru}
            alt=""
          />
          <select className="bg-[#1D1D1D80] w-[92px] h-[42px] p-3  text-center">
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="uz">UZ</option>
          </select>
        </div>
        <button className="w-44 h-14 bg-[#C61F1F] rounded-xl">Войти</button>
      </div>
    </div>
  );
}

export default Header;
