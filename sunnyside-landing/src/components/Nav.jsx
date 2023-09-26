import HamburgerMenu from "./HamburgerMenu";

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 z-20 flex items-center justify-between w-full px-6 py-8 xl:px-12 xl:py-9">
      <img src="./assets/images/logo.svg" alt="logo" className="xl:w-[11rem]" />
      <section className="items-center justify-center hidden gap-12 text-lg text-white xl:flex ">
        <a href="#" className="duration-200 hover:text-vDBlue">
          About
        </a>
        <a href="#" className="duration-200 hover:text-vDBlue">
          Services
        </a>
        <a href="#" className="duration-200 hover:text-vDBlue">
          Projects
        </a>
        <button className="flex items-center justify-center py-4 text-base duration-200 bg-white rounded-full text-vDBlue px-7 font-fraunces hover:bg-opacity-30 hover:text-white">
          CONTACT
        </button>
      </section>
      <HamburgerMenu />
    </nav>
  );
}
