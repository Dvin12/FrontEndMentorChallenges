import Explore from "./components/Explore";

export default function Home() {
  return (
    <header className=" bg-[url('./assets/images/home/background-home-mobile.jpg')] w-full h-screen bg-cover flex flex-col text-white justify-between py-28 items-center gap-6   px-7 ">
      <span className="tracking-[0.18em]  font-barlowCondensed ">
        SO, YOU WANT TO TRAVEL TO
      </span>
      <h1 className="tracking-wider text-7xl font-bellefair">SPACE</h1>
      <p className="leading-relaxed tracking-wide text-center ">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Explore />
    </header>
  );
}
