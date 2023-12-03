import { useState } from "react";

export default function Cart({ cart }) {
  const [isActive, setIsActive] = useState(true);

  function handleClick() {
    setIsActive((active) => !active);
  }
  return (
    <>
      <button onClick={handleClick} className="relative">
        <img src="./images/icon-cart.svg" alt="" />
        {cart[0]?.itemAmount > 0 ? (
          <span className=" absolute -top-2 -right-2 bg-orange rounded-full w-5 h-4 text-xs text-white">
            {cart[0]?.itemAmount}
          </span>
        ) : (
          ""
        )}
      </button>
      {isActive && (
        <section className="w-full fixed top-16 z-30 left-0 h-[250px] ">
          <article className="  shadow-xl    bg-white m-2     rounded-lg h-full  ">
            <div className=" border-b-[1px] border-dGrayBlue/30 py-5">
              <span className=" font-bold px-4">Cart</span>
            </div>
            <span className="flex justify-center overflow-hidden h-3/4 items-center font-bold tracking-wide text-dGrayBlue  ">
              Your cart is empty.
            </span>
          </article>
        </section>
      )}
    </>
  );
}
