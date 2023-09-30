export default function MobileNav({ isOpen, setIsOpen }) {
  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="block xl:hidden">
      <button onClick={handleClick} className="block xl:hidden">
        <img
          src={`./images/${!isOpen ? "icon-hamburger.svg" : "icon-close.svg"}`}
          alt="navigation menu"
        />
      </button>

      <ul
        className={`absolute w-[88%] ${
          isOpen ? "-translate-x-1/2" : "translate-x-[100%]"
        } transition-all  bg-white top-24 left-1/2 flex flex-col items-center justify-center py-6 gap-4 rounded-lg z-30 xl:hidden `}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
      </ul>
    </div>
  );
}
