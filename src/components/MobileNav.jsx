import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      <button onClick={handleClick}>
        <img
          src={`./assets/images/${
            !isOpen ? "icon-hamburger.svg" : "icon-close.svg"
          }`}
          alt="navigation menu"
          className={isOpen && "fixed top-10 right-6 z-30"}
        />
      </button>
      {isOpen && (
        <section className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-40% to-veryDarkBlue to-[105%] px-6 z-10 ">
          <nav className=" bg-[#fff]  my-28 shadow-lg py-10 text-center rounded-md text-veryDarkBlue font-medium ">
            <ul className="flex flex-col items-center justify-center gap-4">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </nav>
        </section>
      )}
    </>
  );
}
