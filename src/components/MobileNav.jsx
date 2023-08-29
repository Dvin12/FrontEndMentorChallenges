import { useState } from "react";

export default function MobileNav() {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive((click) => (click !== true ? true : false));
  }

  return (
    <>
      <button
        onClick={handleActive}
        className={`z-50 ${active ? "fixed right-6" : ""}`}
      >
        <img
          src={`./assets/images/${
            active ? "icon-close-menu.svg" : "icon-hamburger.svg"
          }`}
          alt="hamburger menu"
        />
      </button>

      {active ? (
        <section className="fixed top-0 left-0 z-40 flex items-start justify-center w-screen h-screen bg-black bg-opacity-40">
          <div className="bg-[#fff] my-28 w-full mx-6 flex flex-col items-start justify-center  rounded-md font-medium  ">
            <a href="#" className="p-6">
              About
            </a>
            <a
              href="#"
              className="border-t-[1px] w-full p-6 border-b-[1px] border-cyan"
            >
              Discover
            </a>
            <a href="#" className="p-6">
              Get Started
            </a>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
