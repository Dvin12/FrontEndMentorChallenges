export default function Header() {
  return (
    <header className="w-full h-[37rem]  bg-gradient-to-t from-navLRed to-navVlRed relative top-0 rounded-bl-[6rem] overflow-hidden  px-6 ">
      <div className="absolute w-[70rem] overflow-hidden -left-60 -bottom-96 z-0">
        <img
          src="./assets/images/bg-pattern-intro-mobile.svg"
          alt="pattern"
          className="z-0"
        />
      </div>
      <section className="z-30 flex flex-col items-center justify-center h-full w-full text-white my-10 ">
        <h1 className="z-40 text-4xl text-center font-ubuntu   ">
          A modern publishing platform
        </h1>
        <p className="z-40  font-Overpass text-center  text-lg py-6">
          Grow your audience and build your online brand
        </p>
        <div className="z-30 flex gap-4">
          <button className="py-3 px-6 bg-white rounded-full text-bodyDesaturatedBlue font-bold font-ubuntu">
            Start For Free
          </button>
          <button className="border-[1px] py-3 px-6 rounded-full font-ubuntu">
            Learn More
          </button>
        </div>
      </section>
    </header>
  );
}
