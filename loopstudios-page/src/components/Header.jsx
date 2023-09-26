export default function Header({ children }) {
  return (
    <header className="relative h-full w-fit md:w-full">
      <img
        src="./assets/images/mobile/image-hero.jpg"
        alt="header"
        className="block md:hidden"
      />
      <img
        src="./assets/images/desktop/image-hero.jpg"
        alt="header"
        className="hidden w-full md:block brightness-75"
      />
      {children}
    </header>
  );
}
