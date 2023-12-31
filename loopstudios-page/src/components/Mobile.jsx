import { useState } from "react";

export default function Mobile() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((click) => !click);
  }

  return (
    <section className="block z-60 xl:hidden">
      <section className="z-60">
        <button onClick={handleClick}>
          <img src="./assets/images/icon-hamburger.svg" alt="menu" />
        </button>
      </section>

      <section
        className={`fixed top-0 left-0 w-full bg-black text-white  h-screen z-30 px-6 py-10 ${
          isActive ? "translate-x-[0%]" : "translate-x-[100%]"
        }  transition-all duration-200`}
      >
        <section className="flex items-center justify-between">
          <img
            src="./assets/images/logo.svg"
            alt="loop studios"
            className=" w-[45%] md:w-fit"
          />
          <button onClick={handleClick}>
            <img src="./assets/images/icon-close.svg" alt="button" />
          </button>
        </section>
        <section className="flex flex-col justify-center w-full h-full gap-4 text-3xl tracking-wider font-JosefinSans">
          <a href="#">ABOUT</a>
          <a href="#">CAREERS</a>
          <a href="#">EVENTS</a>
          <a href="#">PRODUCTS</a>
          <a href="#">SUPPORT</a>
        </section>
      </section>
    </section>
  );
}
