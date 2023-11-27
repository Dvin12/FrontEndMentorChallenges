import Explore from "./components/Explore";

export default function Home() {
  return (
    <header className=" bg-[url('./assets/images/home/background-home-mobile.jpg')]  w-full h-screen   bg-cover flex flex-col text-white py-28 md:py-40  justify-between     items-center    px-6 ">
      <div className="flex flex-col items-center gap-6 my-8 md:my-24 md:gap-10">
        <span className="tracking-[0.18em] text-lg   font-barlowCondensed text-skyBlue md:text-2xl">
          SO, YOU WANT TO TRAVEL TO
        </span>

        <h1 className="tracking-wider text-7xl font-bellefair md:text-9xl">
          SPACE
        </h1>

        <p className="font-serif leading-relaxed tracking-wide text-center whitespace-break-spaces text-skyBlue md:text-xl md:px-20 md:leading-loose ">
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
