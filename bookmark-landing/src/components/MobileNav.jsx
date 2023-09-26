import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((open) => !open);
  }
  return (
    <>
      <button onClick={handleClick} className="block xl:hidden">
        <img
          src={`./assets/images/${
            isOpen ? "icon-close.svg" : "icon-hamburger.svg"
          }`}
          alt="menu"
        />
      </button>
      <section
        className={`fixed top-0 left-0 z-50 flex flex-col justify-between w-full h-full xl:hidden px-8 py-10 ${
          !isOpen ? "translate-x-[100%]" : "translate-x-[0%]"
        } transition-all bg-opacity-95 bg-vDarkBlue`}
      >
        <div className="flex items-center justify-between ">
          <img
            src="./assets/images/logo-bookmark.svg"
            alt="company name"
            className=" contrast-200 invert grayscale brightness-75"
          />
          <button onClick={handleClick}>
            <img src="./assets/images/icon-close.svg" alt="close menu" />
          </button>
        </div>
        <div className="flex-1 ">
          <nav className=" flex flex-col items-center justify-center gap-4 mt-14 text-xl text-center text-[#fff] tracking-widest">
            <ul className="w-full font-extralight">
              <li className=" border-t-[1px] border-b-[1px] w-full py-4 border-gBlue ">
                FEATURES
              </li>
              <li className="  border-b-[1px] w-full py-4 border-gBlue ">
                PRICING
              </li>
              <li className="  border-b-[1px] w-full py-4 border-gBlue ">
                CONTACT
              </li>
            </ul>
            <button className=" border-[2px] border-[#fff] py-3 w-full  tracking-widest rounded-md ">
              LOGIN
            </button>
          </nav>
        </div>
        <div className="flex items-center justify-center gap-8">
          <button>
            <img src="./assets/images/icon-facebook.svg" alt="" />
          </button>
          <button>
            <img src="./assets/images/icon-twitter.svg" alt="" />
          </button>
        </div>
      </section>
    </>
  );
}
