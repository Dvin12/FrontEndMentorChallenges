export default function Header({ children }) {
  return (
    <header className=" w-fit h-full relative  ">
      <img src="./assets/images/mobile/image-hero.jpg" alt="hero" />
      {children}
    </header>
  );
}
