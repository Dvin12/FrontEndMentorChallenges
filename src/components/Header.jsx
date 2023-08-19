export default function Header() {
  return (
    <header className="w-full h-full flex flex-col text-vLightGray relative xl:flex-row xl:h-[37rem]   ">
      <img
        src="./assets/images/image-intro-mobile.jpg"
        alt=""
        className="w-full   xl:absolute xl:top-24 xl:right-40 xl:w-[34rem] xl:z-20 "
      />
      <section className="flex flex-col items-center justify-center h-full w-full bg-darkViolet gap-4 py-24 px-4 relative order-last xl:order-1 xl:items-start xl:px-40 xl:overflow-hidden  ">
        <img
          src="./assets/images/bg-pattern-intro-left-mobile.svg"
          alt=""
          className="absolute top-0 left-0 z-0 lg:hidden"
        />

        <img
          src="./assets/images/bg-pattern-intro-right-desktop.svg"
          alt=""
          className="absolute right-0 -top-20 hidden  lg:block z-30"
        />

        <h1 className="text-5xl  text-center font-dmSerifDisplay z-10 xl:text-7xl xl:w-[48%] xl:text-left xl:pt-8">
          Humanizing your insurance.
        </h1>
        <p className="text-center px-2 leading-relaxed tracking-wider xl:text-left xl:px-0  xl:w-[36rem] xl:pt-2  ">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="border-2 px-8 py-2 mt-3 uppercase tracking-widest xl:px-6 ">
          View Plans
        </button>
      </section>
      <img
        src="./assets/images/bg-pattern-intro-left-desktop.svg"
        alt=""
        className="absolute top-[26rem] left-0 z-0 hidden lg:block"
      />
    </header>
  );
}
