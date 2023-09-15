import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-8 py-10 xl:px-44 xl:py-12">
      <img src="./assets/images/logo-bookmark.svg" alt="company name" />
      <section className="items-center justify-center hidden text-sm font-medium tracking-widest gap-9 xl:flex text-vDarkBlue">
        <a href="#">FEATURES</a>
        <a href="#">PRICING</a>
        <a href="#">CONTACT</a>
        <a
          href="#"
          className="px-9 opacity-80 py-3 shadow-lg rounded-md bg-sRed text-[#fff]"
        >
          LOGIN
        </a>
      </section>
      <MobileNav />
    </nav>
  );
}
