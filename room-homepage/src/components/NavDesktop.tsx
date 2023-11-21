export default function NavDesktop() {
  return (
    <nav className="absolute top-0 z-30 items-center justify-center hidden px-16 py-12 xl:flex gap-14 ">
      <button>
        <img src="./assets/images/logo.svg" alt="" />
      </button>
      <ul className="flex items-center justify-center gap-8 text-lg text-white ">
        <li className="flex flex-col items-center justify-center group">
          <a href="#">home</a>
          <span className=" w-0 group-hover:w-1/2 h-[2px] duration-200 bg-white block "></span>
        </li>
        <li className="flex flex-col items-center justify-center group">
          <a href="#">shop</a>
          <span className=" w-0 group-hover:w-1/2 h-[2px] duration-200 bg-white block "></span>
        </li>
        <li className="flex flex-col items-center justify-center group">
          <a href="#">about</a>
          <span className=" w-0 group-hover:w-1/2 h-[2px] duration-200 bg-white block "></span>
        </li>
        <li className="flex flex-col items-center justify-center group">
          <a href="#">contact</a>
          <span className=" w-0 group-hover:w-1/2 h-[2px] duration-200 bg-white block "></span>
        </li>
      </ul>
    </nav>
  );
}
