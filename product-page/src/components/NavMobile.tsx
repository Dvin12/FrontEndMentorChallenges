import { useState } from "react";
import Sidemenu from "./Sidemenu";
import Cart from "./Cart";

export default function NavMobile({ cart }): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  return (
    <nav className="xl:hidden flex items-center justify-between w-full px-6 py-4">
      <div className="flex items-center justify-center gap-4">
        <button onClick={handleClick}>
          <img src="./images/icon-menu.svg" alt="" />
        </button>
        <img src="./images/logo.svg" alt="" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Cart cart={cart} />
        <button className="">
          <img src="./images/image-avatar.png" alt="" className="w-[30px]" />
        </button>
      </div>
      <Sidemenu isActive={isActive} handleClick={handleClick} />
    </nav>
  );
}
