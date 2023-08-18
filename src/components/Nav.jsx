import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Nav() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((click) => (click !== false ? false : true));
  }

  return (
    <nav className="relative z-30 flex items-center justify-between">
      <img src="../assets/images/logo.svg" alt="" className="z-20 w-6 md:w-8" />
      <section className="hidden gap-8 text-xl font-extrabold tracking-wide text-vDarkBlue md:flex">
        <a href="#" className="relative w-full transition duration-300 group">
          <span className="absolute bottom-[3px] w-0 group-hover:w-full transition-all h-[2px]  bg-vDarkBlue"></span>
          PRODUCT
        </a>
        <a href="#" className="relative w-full transition duration-300 group">
          <span className="absolute bottom-[3px] w-0 group-hover:w-full transition-all h-[2px]  bg-vDarkBlue "></span>
          FEATURES
        </a>
        <a href="#" className="relative w-full transition duration-300 group">
          <span className="absolute bottom-[3px] w-0 group-hover:w-full transition-all h-[2px]  bg-vDarkBlue"></span>
          PRICING
        </a>
        <div className="flex items-center justify-center gap-8 text-grayBlue">
          <span>&#9679;</span>
          <a href="#" className="relative w-full transition duration-300 group">
            <span className="absolute bottom-[3px] w-0 group-hover:w-full transition-all h-[2px]  bg-grayBlue"></span>
            LOGIN
          </a>
        </div>
      </section>

      <button onClick={handleClick} className="z-20 md:hidden">
        <img
          src={`../assets/images/${
            active ? "icon-close.svg" : "icon-hamburger.svg"
          }`}
          alt=""
        />
      </button>

      <MobileNav active={active} />
    </nav>
  );
}
