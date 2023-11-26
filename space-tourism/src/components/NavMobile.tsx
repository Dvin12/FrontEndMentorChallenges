import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavMobile(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  return (
    <nav className="fixed flex items-center justify-between w-full p-6 xl:hidden">
      <img src="./assets/images/shared/logo.svg" alt="" className="w-[13%]" />
      <button onClick={handleClick}>
        <img src="./assets/images/shared/icon-hamburger.svg" alt="" />
      </button>

      <section
        className={`fixed top-0 left-0 z-40 w-[70%] ${
          isActive ? "translate-x-[43%]" : "translate-x-[200%]"
        }   h-screen  p-6 backdrop-blur-lg text-white font-barlowCondensed duration-200  `}
      >
        <button className="absolute top-9 right-6" onClick={handleClick}>
          <img
            src="./assets/images/shared/icon-close.svg"
            alt=""
            className=""
          />
        </button>
        <ul className="flex flex-col items-start w-full gap-8 my-24 text-xl ">
          <li>
            <Link to="/" className="flex gap-2 ">
              <span className="font-bold tracking-[0.3em] flex-shrink-0">
                00
              </span>
              <span className="tracking-[0.2em]">HOME</span>
            </Link>
          </li>

          <li>
            <Link to="/destination" className="flex gap-2 ">
              <span className="font-bold tracking-[0.4em]">01</span>
              <span className="tracking-[0.2em]">DESTINATION</span>
            </Link>
          </li>

          <li>
            <Link to="/crew" className="flex gap-2 ">
              <span className="font-bold tracking-[0.3em]">02</span>
              <span className="tracking-[0.2em]">CREW</span>
            </Link>
          </li>
          <li>
            <Link to="/technology" className="flex gap-2 ">
              <span className="font-bold tracking-[0.3em] ">03</span>
              <span className="tracking-[0.2em]">TECHNOLOGY</span>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
