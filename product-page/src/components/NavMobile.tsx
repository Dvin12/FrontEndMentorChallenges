import { useState } from "react";
import Sidemenu from "./Sidemenu";
import Cart from "./Cart";
import User from "./User";
import { CartProp } from "./Interfaces";

export default function NavMobile({ cart, setCart }: CartProp): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  return (
    <nav className="flex w-full items-center justify-between px-6 py-4 xl:hidden">
      <div className="flex items-center justify-center gap-4">
        <button onClick={handleClick}>
          <img src="./images/icon-menu.svg" alt="" />
        </button>
        <img src="./images/logo.svg" alt="" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Cart cart={cart} setCart={setCart} />
        <User />
      </div>
      <Sidemenu isActive={isActive} handleClick={handleClick} />
    </nav>
  );
}
