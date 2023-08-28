import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-14 absolute w-full ">
      <img src="./assets/images/logo.svg" alt="logo" className=" w-1/4 z-30" />
      <MobileNav />
    </nav>
  );
}
