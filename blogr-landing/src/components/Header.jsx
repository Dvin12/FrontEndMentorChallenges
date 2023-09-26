export default function Header() {
  return (
    <header className="w-full h-[37rem]  bg-gradient-to-t from-navLRed to-navVlRed relative top-0 rounded-bl-[6rem] overflow-hidden  px-6 ">
      <div className="absolute w-[70rem] overflow-hidden -left-60 -bottom-96 z-0 xl:w-[180rem] xl:-bottom-[70rem] xl:-left-60">
        <img
          src="./assets/images/bg-pattern-intro-mobile.svg"
          alt="pattern"
          className="z-0 block xl:hidden"
        />
        <img
          src="./assets/images/bg-pattern-intro-desktop.svg"
          alt="pattern"
          className="z-0 hidden xl:block"
        />
      </div>
      <section className="z-40 flex flex-col items-center justify-center w-full h-full my-10 text-white ">
        <h1 className="z-40 w-[17rem] xl:w-full text-3xl text-center font-ubuntu xl:text-6xl ">
          A modern publishing platform
        </h1>
        <p className="z-40 py-6 text-lg text-center font-Overpass xl:text-xl brightness-90">
          Grow your audience and build your online brand
        </p>
        <section className="z-40 flex gap-4">
          <button className="px-6 py-3 font-bold duration-200 bg-white rounded-full text-navLRed font-ubuntu hover:bg-redHoverBg hover:text-white">
            Start for Free
          </button>
          <button className="border-[1px] py-3 px-6 rounded-full font-ubuntu hover:bg-white hover:text-redText font-bold duration-200">
            Learn More
          </button>
        </section>
      </section>
    </header>
  );
}
