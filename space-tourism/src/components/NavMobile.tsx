import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavMobile(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  return (
    <nav className="fixed z-40 flex w-full items-center justify-between px-7 py-6 md:hidden">
      <img src="./assets/images/shared/logo.svg" alt="" className="w-[40px] " />
      <button onClick={handleClick}>
        <img src="./assets/images/shared/icon-hamburger.svg" alt="" />
      </button>

      <section
        className={`fixed left-0 top-0  w-[66.6%] ${
          isActive ? "translate-x-[50%]" : "translate-x-[200%]"
        }   h-screen  p-6 font-barlowCondensed text-white backdrop-blur-lg duration-200  `}
      >
        <button className="absolute right-6 top-8" onClick={handleClick}>
          <img
            src="./assets/images/shared/icon-close.svg"
            alt=""
            className="w-[19px]"
          />
        </button>

        <ul className="my-32 flex w-full flex-col items-start gap-8  ">
          <li>
            <Link to="/" className="flex gap-3 ">
              <span className="shrink-0 font-bold tracking-[0.3em]">00</span>
              <span className="tracking-[0.27em]">HOME</span>
            </Link>
          </li>

          <li>
            <Link to="/destination" className="flex gap-3 ">
              <span className="font-bold tracking-[0.4em]">01</span>
              <span className="tracking-[0.2em]">DESTINATION</span>
            </Link>
          </li>

          <li>
            <Link to="/crew" className="flex gap-3 ">
              <span className="font-bold tracking-[0.3em]">02</span>
              <span className="tracking-[0.2em]">CREW</span>
            </Link>
          </li>

          <li>
            <Link to="/technology" className="flex gap-3 ">
              <span className="font-bold tracking-[0.3em] ">03</span>
              <span className="tracking-[0.2em]">TECHNOLOGY</span>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
