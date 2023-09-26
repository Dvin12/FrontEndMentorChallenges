export default function Section() {
  return (
    <section className="p-6 w-full h-full flex flex-col items-center justify-center mt-28 text-darkViolet relative xl:px-40 xl:pt-80 xl:mt-0 xl:items-start">
      <img
        src="./assets/images/bg-pattern-intro-right-mobile.svg"
        alt="pattern"
        className="z-20 absolute -top-56 right-0 lg:hidden"
      />
      <div className="w-36 items-center flex justify-center bg-grayBLue h-[1px]"></div>
      <h3 className="text-4xl font-dmSerifDisplay mt-10 xl:text-7xl">
        We're different
      </h3>

      <div className="flex w-fit xl:w-full xl:my-24 xl:gap-24 xl:justify-between flex-col xl:flex-row ">
        <article className="flex flex-col  items-center mt-20 xl:mt-0 gap-8 text-center xl:text-left xl:items-start xl:w-fit ">
          <img src="./assets/images/icon-snappy-process.svg" alt="" />
          <h4 className="text-3xl font-dmSerifDisplay">Snappy Process</h4>
          <p className="xl:w-full">
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms.
          </p>
        </article>

        <article className="flex flex-col items-center mt-12 xl:mt-0 gap-8 text-center  xl:text-left xl:items-start xl:w-fit">
          <img src="./assets/images/icon-affordable-prices.svg" alt="" />
          <h4 className="text-3xl font-dmSerifDisplay">Affordable Prices</h4>
          <p className="xl:w-full">
            We don't want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </article>

        <article className="flex flex-col items-center mt-12 xl:mt-0 gap-8 text-center  xl:text-left xl:items-start xl:w-fit">
          <img src="./assets/images/icon-people-first.svg" alt="" />
          <h4 className="text-3xl font-dmSerifDisplay">People First</h4>
          <p className="xl:w-full">
            Our plans aren't full of conditions and clauses to provent payouts.
            We make sure you're covered when you need it.
          </p>
        </article>
      </div>

      <div className="w-full bg-darkViolet text-vLightGray flex items-center justify-center my-32 flex-col relative overflow-hidden xl:flex-row xl:justify-evenly  xl:h-[15rem] xl:gap-20 ">
        <span className="text-4xl text-center font-dmSerifDisplay px-7 py-14 z-20 xl:text-left xl:px-0 xl:w-[33rem] xl:text-6xl  ">
          Find out more about how we work
        </span>
        <button className="border-2 px-6 py-2 mb-16 tracking-widest xl:mb-0 z-30 hover:bg-vLightGray hover:text-vDarkViolet duration-300 font-bold ">
          HOW WE WORK
        </button>
        <img
          src="./assets/images/bg-pattern-how-we-work-mobile.svg"
          alt="pattern"
          className="absolute right-0 top-0 z-10 lg:hidden "
        />

        <img
          src="./assets/images/bg-pattern-how-we-work-desktop.svg"
          alt="pattern"
          className="absolute right-0 top-0 z-10 lg:block hidden "
        />
      </div>
    </section>
  );
}
