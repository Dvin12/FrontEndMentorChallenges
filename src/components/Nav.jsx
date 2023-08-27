import HamburgerMenu from "./HamburgerMenu";

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 z-20 flex justify-between w-full px-6 py-8">
      <img src="./assets/images/logo.svg" alt="logo" />
      <HamburgerMenu />
    </nav>
  );
}
