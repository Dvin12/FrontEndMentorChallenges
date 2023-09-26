export default function Header() {
  return (
    <header className="relative w-full h-full ">
      <img
        src="./assets/images/mobile/image-header.jpg"
        alt="header"
        className="xl:hidden"
      />

      <img
        src="./assets/images/desktop/image-header.jpg"
        alt="header"
        className="hidden xl:block"
      />

      <section className="absolute top-0 flex flex-col items-center justify-center w-full h-full gap-12 xl:gap-24 xl:bottom-16 xl:top-auto">
        <h1 className="px-2 text-4xl font-extrabold tracking-[0.2em] text-center text-white font-fraunces leading-tight xl:text-6xl ">
          WE ARE CREATIVES
        </h1>
        <img src="./assets/images/icon-arrow-down.svg" alt="" />
      </section>
    </header>
  );
}
