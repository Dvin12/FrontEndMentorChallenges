import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between p-6 absolute w-full bg-white z-30 ">
      <img src="./images/logo.svg" alt="easy bank logo" />
      <MobileNav />
    </nav>
  );
}
