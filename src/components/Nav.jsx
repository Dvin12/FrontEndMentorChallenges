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
      <ul className="hidden gap-8 text-xl font-extrabold tracking-wide text-vDarkBlue md:flex">
        <li>PRODUCT</li>
        <li>FEATURES</li>
        <li>PRICING</li>
        <div className="flex items-center justify-center gap-8 text-grayBlue">
          <span>&#9679;</span>
          <span>LOGIN</span>
        </div>
      </ul>

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
