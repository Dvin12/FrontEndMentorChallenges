import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <nav className="absolute flex items-center justify-between w-full px-6 text-lg font-bold text-white py-14 xl:px-40 xl:py-16">
      <img
        src="./assets/images/logo.svg"
        alt="logo"
        className="z-30 w-1/4 lg:w-[6rem] xl:hidden block"
      />
      <section className="z-30 items-center hidden xl:flex xl:justify-center xl:gap-14 ">
        <img
          src="./assets/images/logo.svg"
          alt="logo"
          className="z-30 w-1/2 lg:w-[6rem]"
        />
        <a
          href="#"
          className="flex items-center justify-center gap-2 brightness-90"
        >
          Product
          <img src="./assets/images/icon-arrow-light.svg" alt="arrow" />
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 brightness-90"
        >
          Company
          <img src="./assets/images/icon-arrow-light.svg" alt="arrow" />
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 brightness-90"
        >
          Connect
          <img src="./assets/images/icon-arrow-light.svg" alt="arrow" />
        </a>
      </section>
      <section className="items-center justify-center hidden gap-8 xl:flex">
        <a href="#" className="z-40 brightness-90 ">
          Login
        </a>
        <button className="z-40 px-10 py-3 font-bold bg-white rounded-full font-ubuntu text-navLRed">
          Sign Up
        </button>
      </section>
      <MobileNav />
    </nav>
  );
}
