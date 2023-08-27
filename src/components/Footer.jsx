export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-full px-10 gap-11 py-14 bg-mCyan brightness-150">
      <img
        src="./assets/images/logo.svg"
        alt="logo"
        className="flex w-2/3 filter invert-[72%] xl:w-[15%] "
      />
      <section className="flex items-center justify-between w-full text-xl text-dCyan xl:justify-center xl:gap-10 ">
        <a href="#" className="duration-200 hover:text-white">
          About
        </a>
        <a href="#" className="duration-200 hover:text-white">
          Services
        </a>
        <a href="#" className="duration-200 hover:text-white">
          Projects
        </a>
      </section>
      <section className="flex items-center justify-center py-10 gap-7 xl:py-4">
        <a href="#">
          <img
            src="./assets/images/icon-facebook.svg"
            alt="facebook"
            className="filter saturate-[1%]  brightness-[65%] hover:brightness-20 hover:invert-[100%] duration-200 transition-all "
          />
        </a>
        <a href="#">
          <img
            src="./assets/images/icon-instagram.svg"
            alt="instagram"
            className="filter saturate-[1%]  brightness-[65%]  hover:brightness-20 hover:invert-[100%] duration-200 transition-all"
          />
        </a>
        <a href="#">
          <img
            src="./assets/images/icon-twitter.svg"
            alt="twitter"
            className="filter saturate-[1%]  brightness-[65%] hover:brightness-20 hover:invert-[100%] duration-200 transition-all "
          />
        </a>
        <a href="#">
          <img
            src="./assets/images/icon-pinterest.svg"
            alt="pinterest"
            className="filter saturate-[1%]  brightness-[65%] hover:brightness-20 hover:invert-[100%] duration-200 transition-all "
          />
        </a>
      </section>
    </footer>
  );
}
