import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-8 py-10">
      <img src="./assets/images/logo-bookmark.svg" alt="company name" />
      <MobileNav />
    </nav>
  );
}
