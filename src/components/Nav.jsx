import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-14">
      <img
        src="./assets/images/logo.svg"
        alt="logo"
        className="bg-blueBody w-1/4"
      />
      <MobileNav />
    </nav>
  );
}
