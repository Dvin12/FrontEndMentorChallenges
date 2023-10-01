import Button from "./Button";
import MobileNav from "./MobileNav";

export default function Navigation({ isOpen, setIsOpen }) {
  return (
    <nav className="fixed z-20 flex items-center justify-between w-full p-6 bg-white xl:px-16 2xl:px-40 xl:py-5 ">
      <img src="./images/logo.svg" alt="easy bank logo" />
      <ul className="items-center justify-center hidden gap-8 xl:flex text-gBlue ">
        <li className="relative flex items-center justify-center transition group">
          <a href="#" className="duration-300 group-hover:text-dBlue">
            Home
          </a>
          <div className=" w-0 flex items-center justify-center h-[5px] group-hover:w-full  transition-all  absolute top-[3.1rem] duration-300 bg-gradient-to-r from-lGreen to-bCyan "></div>
        </li>
        <li className="relative flex items-center justify-center transition group">
          <a href="#" className="duration-300 group-hover:text-dBlue">
            About
          </a>
          <div className=" w-0 flex items-center justify-center h-[5px] group-hover:w-full  transition-all  absolute top-[3.1rem] duration-300 bg-gradient-to-r from-lGreen to-bCyan "></div>
        </li>
        <li className="relative flex items-center justify-center transition group">
          <a href="#" className="duration-300 group-hover:text-dBlue">
            Contact
          </a>
          <div className=" w-0 flex items-center justify-center h-[5px] group-hover:w-full  transition-all  absolute top-[3.1rem] duration-300 bg-gradient-to-r from-lGreen to-bCyan "></div>
        </li>
        <li className="relative flex items-center justify-center transition group">
          <a href="#" className="duration-300 group-hover:text-dBlue">
            Blog
          </a>
          <div className=" w-0 flex items-center justify-center h-[5px] group-hover:w-full  transition-all  absolute top-[3.1rem] duration-300 bg-gradient-to-r from-lGreen to-bCyan "></div>
        </li>
        <li className="relative flex items-center justify-center transition group">
          <a href="#" className="duration-300 group-hover:text-dBlue">
            Careers
          </a>
          <div className=" w-0 flex items-center justify-center h-[5px] group-hover:w-full  transition-all  absolute top-[3.1rem] duration-300 bg-gradient-to-r from-lGreen to-bCyan "></div>
        </li>
      </ul>
      <div className="hidden xl:block">
        <Button>Request Invite</Button>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
