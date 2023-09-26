import Button from "./Button";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-8 py-10 xl:px-44 xl:py-12">
      <img src="./assets/images/logo-bookmark.svg" alt="company name" />
      <section className="items-center justify-center hidden text-sm font-medium tracking-widest gap-9 xl:flex text-vDarkBlue">
        <a href="#" className="duration-300 hover:text-sRed">
          FEATURES
        </a>
        <a href="#" className="duration-300 hover:text-sRed">
          PRICING
        </a>
        <a href="#" className="duration-300 hover:text-sRed">
          CONTACT
        </a>
        <Button color="red">LOGIN</Button>
      </section>
      <MobileNav />
    </nav>
  );
}
