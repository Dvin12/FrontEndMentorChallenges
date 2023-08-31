import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 flex items-center justify-between w-full px-6 py-8 xl:px-40 xl:py-12">
      <img src="./assets/images/logo.svg" alt="logo" />
      <section className="xl:flex gap-8 text-sm text-[#fff] hidden">
        <a href="#" className="duration-200 hover:opacity-80">
          About
        </a>
        <a href="#" className="duration-200 hover:opacity-80">
          Discover
        </a>
        <a href="#" className="duration-200 hover:opacity-80">
          Get Started
        </a>
      </section>
      <MobileNav />
    </nav>
  );
}
