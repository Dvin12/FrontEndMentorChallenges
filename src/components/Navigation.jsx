import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const [activated, setActivated] = useState(false);

  function handleClick() {
    setActivated((click) => (click !== false ? false : true));
  }

  return (
    <nav className="p-6 flex items-center justify-between xl:px-40 xl:py-6  z-40 fixed w-full lg:static bg-[#fff] ">
      <img src="./assets/images/logo.svg" alt="" />
      <button onClick={handleClick} className="lg:hidden">
        <img
          src={`./assets/images/${
            activated ? "icon-close.svg" : "icon-hamburger.svg"
          }`}
          alt="logo"
        />
      </button>
      <section className=" items-center justify-center gap-7 font-extrabold text-sm tracking-wider  z-30 hidden lg:flex">
        <a
          href="#"
          className="text-grayBLue hover:text-darkViolet duration-300"
        >
          HOW WE WORK
        </a>
        <a
          href="#"
          className="text-grayBLue hover:text-darkViolet duration-300"
        >
          BLOG
        </a>
        <a
          href="#"
          className="text-grayBLue hover:text-darkViolet duration-300"
        >
          ACCOUNT
        </a>
        <a
          href="#"
          className="border-2 px-7 py-2 hover:bg-vDarkViolet hover:text-vLightGray duration-300  "
        >
          VIEW PLANS
        </a>
      </section>
      <MobileNav activated={activated} />
    </nav>
  );
}
