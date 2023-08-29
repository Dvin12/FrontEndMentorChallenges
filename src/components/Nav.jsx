import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 w-full  px-6 py-8 flex items-center justify-between">
      <img src="./assets/images/logo.svg" alt="logo" />
      <MobileNav />
    </nav>
  );
}
