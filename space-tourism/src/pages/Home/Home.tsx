import Explore from "./components/Explore";

export default function Home() {
  return (
    <header className=" flex h-screen w-full flex-col items-center justify-between bg-[url('./assets/images/home/background-home-mobile.jpg')] bg-cover px-6 py-28  text-white md:bg-[url('./assets/images/home/background-home-tablet.jpg')] md:py-36 xl:flex-row xl:bg-[url('./assets/images/home/background-home-desktop.jpg')] xl:px-52 xl:py-0 xl:pt-20   ">
      <div className="my-8 flex flex-col items-center gap-6 md:my-16 md:gap-10 xl:w-[35%] xl:items-start">
        <span className="font-barlowCondensed text-lg   tracking-[0.18em] text-skyBlue md:text-2xl">
          SO, YOU WANT TO TRAVEL TO
        </span>

        <h1 className="font-bellefair text-7xl tracking-wider md:text-9xl">
          SPACE
        </h1>

        <p className="whitespace-break-spaces text-center font-serif leading-relaxed tracking-wide text-skyBlue md:px-20 md:text-xl md:leading-loose xl:px-0 xl:text-left xl:tracking-wider ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <Explore />
    </header>
  );
}
