import Button from "./Button";
import MobileNav from "./MobileNav";

export default function Navigation({ isOpen, setIsOpen }) {
  return (
    <nav className="fixed z-20 flex items-center justify-between w-full p-6 bg-white xl:px-40 xl:py-5 ">
      <img src="./images/logo.svg" alt="easy bank logo" />
      <ul className="items-center justify-center hidden gap-8 xl:flex text-gBlue ">
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
      <div className="hidden xl:block">
        <Button>Request Invite</Button>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
