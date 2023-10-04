export default function Background() {
  return (
    <header className="w-full bg-desaturatedCyan">
      <img
        src="./images/bg-header-mobile.svg"
        alt="header background"
        className="block w-full xl:hidden"
      />

      <img
        src="./images/bg-header-desktop.svg"
        alt="header background"
        className="hidden w-full xl:block"
      />
    </header>
  );
}
