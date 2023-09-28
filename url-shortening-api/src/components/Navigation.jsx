import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6  py-9">
      <img src="./images/logo.svg" alt="Shortly company logo" />
      <MobileNav />
    </nav>
  );
}
