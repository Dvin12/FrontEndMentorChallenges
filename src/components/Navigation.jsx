import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const [activated, setActivated] = useState(false);

  function handleClick() {
    setActivated((click) => (click !== false ? false : true));
  }

  return (
    <nav className="p-6 flex items-center justify-between ">
      <img src="./assets/images/logo.svg" alt="" />
      <button onClick={handleClick}>
        <img
          src={`./assets/images/${
            activated ? "icon-close.svg" : "icon-hamburger.svg"
          }`}
          alt=""
        />
      </button>
      <MobileNav activated={activated} />
    </nav>
  );
}
