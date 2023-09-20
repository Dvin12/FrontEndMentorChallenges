import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-11 ">
      <img
        src="./assets/images/logo.svg"
        alt="company name"
        className="w-[34%]"
      />
      <MobileNav />
    </nav>
  );
}
