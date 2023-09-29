import Button from "./Button";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-9 xl:px-20 2xl:px-40 xl:py-14 xl:text-gViolet xl:font-bold xl:tracking-wide">
      <img src="./assets/images/logo.svg" alt="Shortly company logo" />
      <ul className="items-center flex-1 hidden xl:flex gap-7 px-14">
        <li>
          <a href="#" className="duration-200 hover:text-veryDarkViolet">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="duration-200 hover:text-veryDarkViolet">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="duration-200 hover:text-veryDarkViolet">
            Resources
          </a>
        </li>
      </ul>
      <ul className="items-center hidden gap-8 xl:flex">
        <li>
          <a href="#" className="duration-200 hover:text-veryDarkViolet">
            Login
          </a>
        </li>
        <li>
          <Button>Sign Up</Button>
        </li>
      </ul>
      <MobileNav />
    </nav>
  );
}
