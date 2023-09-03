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
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Events</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
      </section>

      <Mobile />
    </nav>
  );
}
