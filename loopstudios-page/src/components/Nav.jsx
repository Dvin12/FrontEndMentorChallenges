import Mobile from "./Mobile";

export default function Nav() {
  return (
    <nav className="absolute top-0 z-30 flex items-center justify-between w-full px-6 py-10 xl:px-40 xl:py-16">
      <img
        src="./assets/images/logo.svg"
        alt="loop studios"
        className="w-[45%] md:w-fit"
      />

      <section className="z-30 items-center hidden gap-8 text-white xl:flex ">
        <a
          href="#"
          className="relative flex flex-col items-center justify-center transition duration-300 group"
        >
          About
          <span className="w-0 h-[2px] bg-white absolute top-7 group-hover:w-3/4 transition-all duration-200 "></span>
        </a>
        <a
          href="#"
          className="relative flex flex-col items-center justify-center transition duration-300 group"
        >
          Careers
          <span className="w-0 h-[2px] bg-white absolute top-7 group-hover:w-3/4 transition-all duration-200 "></span>
        </a>
        <a
          href="#"
          className="relative flex flex-col items-center justify-center transition duration-300 group"
        >
          Events
          <span className="w-0 h-[2px] bg-white absolute top-7 group-hover:w-3/4 transition-all duration-200 "></span>
        </a>
        <a
          href="#"
          className="relative flex flex-col items-center justify-center transition duration-300 group"
        >
          Products
          <span className="w-0 h-[2px] bg-white absolute top-7 group-hover:w-3/4 transition-all duration-200 "></span>
        </a>
        <a
          href="#"
          className="relative flex flex-col items-center justify-center transition duration-300 group"
        >
          Support
          <span className="w-0 h-[2px] bg-white absolute top-7 group-hover:w-3/4 transition-all duration-200 "></span>
        </a>
      </section>

      <Mobile />
    </nav>
  );
}
