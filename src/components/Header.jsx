export default function Header({ setActiveModal }) {
  return (
    <header className="relative w-full h-full ">
      <img
        src="./assets/images/image-hero-mobile.jpg"
        alt="stand"
        className="block md:hidden"
      />

      <img
        src="./assets/images/image-hero-desktop.jpg"
        alt="stand"
        className="hidden w-full md:block"
      />
      <div className="absolute top-0 z-0 w-full bg-gradient-to-b from-black to-transparent h-1/2 opacity-60"></div>
    </header>
  );
}
