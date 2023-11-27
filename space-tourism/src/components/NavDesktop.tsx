export default function NavDesktop() {
  return (
    <nav className="fixed items-center justify-between hidden w-full bg-transparent md:flex">
      <div className="px-12">
        <img src="./assets/images/shared/logo.svg" alt="" />
      </div>
      <ul className="flex items-center justify-center px-8 py-12  backdrop-blur text-xl tracking-[0.18em] bg-darkBlue brightness-[1.20] gap-8 text-white font-barlowCondensed ">
        <li>HOME</li>
        <li>DESTINATION</li>
        <li>CREW</li>
        <li>TECHNOLOGY</li>
      </ul>
    </nav>
  );
}
