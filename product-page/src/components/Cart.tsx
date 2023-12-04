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
          <span className=" absolute -top-2 -right-2 bg-orange rounded-full w-5 h-4 text-xs text-white">
            {cart[0]?.itemAmount}
          </span>
        ) : (
          ""
        )}
      </button>
      {isActive && (
        <section
          className={`w-full xl:w-[400px] xl:top-24 xl:right-36 xl:left-auto fixed top-16 z-30 left-0 ${
            cart.length === 0 ? "h-[250px]" : "h-fit"
          }`}
        >
          <article className="  shadow-xl    bg-white m-2     rounded-lg h-full  ">
            <div className=" border-b-[1px] border-dGrayBlue/30 py-5">
              <span className=" font-bold px-4">Cart</span>
            </div>
            {cart.length === 0 ? (
              <span className="flex justify-center overflow-hidden h-3/4  items-center font-bold tracking-wide text-dGrayBlue  ">
                Your cart is empty.
              </span>
            ) : (
              <div className="flex flex-col gap-6 px-4 py-6">
                <div className="flex items-center justify-between text-dGrayBlue tracking-wide ">
                  <img
                    src={`${cart[0].thumbnails[0].thumbnail}`}
                    alt=""
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
                <button className=" bg-orange py-4 rounded-xl text-white font-bold tracking-wide">
                  Checkout
                </button>
              </div>
            )}
          </article>
        </section>
      )}
    </>
  );
}
