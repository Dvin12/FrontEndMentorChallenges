import { useState } from "react";

export default function HamburgerMenu() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((click) => (click !== true ? true : false));
  }

  return (
    <>
      <button className="xl:hidden" onClick={handleClick}>
        <img src="./assets/images/icon-hamburger.svg" alt="hamburger menu" />
      </button>

      {active ? (
        <aside className="fixed left-0 z-30 w-[90%] mx-4 bg-white top-28 md:hidden  ">
          <div
            className=" w-0 h-0  absolute right-0 -top-6 border-white   border-l-[30px] border-l-transparent
   border-b-[30px] border-b-orange-500
   border-r-[0px] border-r-transparent"
          ></div>
          <section className="flex flex-col items-center w-full gap-8 py-8 text-lg">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a
              href="#"
              className="px-8 py-4 rounded-full bg-yellow font-fraunces"
            >
              CONTACT
            </a>
          </section>
        </aside>
      ) : (
        ""
      )}
    </>
  );
}
