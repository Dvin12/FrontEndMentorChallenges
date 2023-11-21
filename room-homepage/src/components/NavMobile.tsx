import { useState } from "react";

export default function NavMobile(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  function handleClick(): void {
    setIsActive((active) => !active);
  }

  return (
    <div className="xl:hidden">
      <section className="absolute z-30 flex items-center justify-between w-full px-6 py-12">
        <button className="w-full" onClick={handleClick}>
          <img src="./assets/images/icon-hamburger.svg" alt="hamburger" />
        </button>
        <div className="w-full">
          <img src="./assets/images/logo.svg" alt="company room logo" />
        </div>
        <div className="w-1/2"></div>
      </section>
      <section
        className={`fixed z-40 w-full h-screen ${
          isActive ? "-translate-x-[0%]" : "-translate-x-[100%]"
        }  bg-black bg-opacity-50 duration-200 transition-all`}
      >
        <nav className="flex items-center justify-between px-6 py-12 bg-white">
          <button onClick={handleClick}>
            <img src="./assets/images/icon-close.svg" alt="close navigation" />
          </button>
          <ul className="flex items-center justify-center gap-8 font-bold">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">shop</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
