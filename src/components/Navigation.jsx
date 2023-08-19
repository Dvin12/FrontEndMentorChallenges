import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const [activated, setActivated] = useState(false);

  function handleClick() {
    setActivated((click) => (click !== false ? false : true));
  }

  return (
    <nav className="p-6 flex items-center justify-between xl:px-40 xl:py-6  z-30 ">
      <img src="./assets/images/logo.svg" alt="" />
      <button onClick={handleClick} className="lg:hidden">
        <img
          src={`./assets/images/${
            activated ? "icon-close.svg" : "icon-hamburger.svg"
          }`}
          alt=""
        />
      </button>
      <section className=" items-center justify-center gap-7 font-extrabold text-sm tracking-wider  z-30 hidden lg:flex">
        <a href="#">HOW WE WORK</a>
        <a href="#">BLOG</a>
        <a href="#">ACCOUNT</a>
        <a href="#" className="border-2 px-7 py-2  ">
          VIEW PLANS
        </a>
      </section>
      <MobileNav activated={activated} />
    </nav>
  );
}
