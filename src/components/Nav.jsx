import Button from "./Button";
import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-11 xl:px-44 xl:py-14 ">
      <img
        src="./assets/images/logo.svg"
        alt="company name"
        className="w-fit"
      />

      <ul className="items-center justify-center hidden gap-10 text-sm font-semibold xl:flex">
        <li>
          <a href="#" className="duration-200 hover:text-darkGrayBlue">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="duration-200 hover:text-darkGrayBlue">
            Product
          </a>
        </li>
        <li>
          <a href="#" className="duration-200 hover:text-darkGrayBlue">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="duration-200 hover:text-darkGrayBlue">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className="duration-200 hover:text-darkGrayBlue">
            Community
          </a>
        </li>
      </ul>

      <div className="hidden xl:block">
        <Button>Get Started</Button>
      </div>

      <MobileNav />
    </nav>
  );
}
