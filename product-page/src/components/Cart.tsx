import { useState } from "react";
import { CartProp } from "./Interfaces";

export default function Cart({ cart, setCart }: CartProp) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  function hanldeRemoveFromCart(id: number) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  return (
    <>
      <button onClick={handleClick} className="relative">
        <img src="./images/icon-cart.svg" alt="" className="xl:w-[26px]" />
        {cart[0]?.itemAmount > 0 ? (
          <span className=" absolute -right-2 -top-2 h-4 w-5 rounded-full bg-orange text-xs text-white">
            {cart[0]?.itemAmount}
          </span>
        ) : (
          ""
        )}
      </button>
      {isActive && (
        <section
          className={`fixed left-0 top-16 z-30 w-full xl:left-auto xl:right-36 xl:top-24 xl:w-[400px] ${
            cart.length === 0 ? "h-[250px]" : "h-fit"
          }`}
        >
          <article className="  m-2    h-full rounded-lg     bg-white shadow-xl  ">
            <div className=" border-b-[1px] border-dGrayBlue/30 py-5">
              <span className=" px-4 font-bold">Cart</span>
            </div>
            {cart.length === 0 ? (
              <p className="flex h-3/4 items-center justify-center  overflow-hidden font-bold tracking-wide text-dGrayBlue  ">
                Your cart is empty.
              </p>
            ) : (
              <section className="flex flex-col gap-6 px-4 py-6">
                <div className="flex items-center justify-between tracking-wide text-dGrayBlue ">
                  <img
                    src={`${cart[0].thumbnails[0].thumbnail}`}
                    alt={cart[0].model}
                    className="w-[60px] rounded-lg"
                  />
                  <div>
                    <h3>{cart[0].model}</h3>
                    <div className="flex gap-2">
                      <span>${cart[0].discountedPrice}.00</span>
                      <span>x {cart[0].itemAmount}</span>
                      <span className=" font-bold text-black">
                        ${cart[0].discountedPrice * cart[0].itemAmount}.00
                      </span>
                    </div>
                  </div>
                  <button onClick={() => hanldeRemoveFromCart(cart[0].id)}>
                    <img src="../images/icon-delete.svg" alt="" />
                  </button>
                </div>
                <button className=" rounded-xl bg-orange py-4 font-bold tracking-wide text-white">
                  Checkout
                </button>
              </section>
            )}
          </article>
        </section>
      )}
    </>
  );
}
