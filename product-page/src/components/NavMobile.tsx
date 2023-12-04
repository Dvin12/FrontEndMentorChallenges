import { useState } from "react";
import Sidemenu from "./Sidemenu";
import Cart from "./Cart";
import User from "./User";

export default function NavMobile({ cart, setCart }): JSX.Element {
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
        <Cart cart={cart} setCart={setCart} />
        <User />
      </div>
      <Sidemenu isActive={isActive} handleClick={handleClick} />
    </nav>
  );
}
