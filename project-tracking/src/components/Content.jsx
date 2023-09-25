export default function Content() {
  return (
    <section className="flex flex-col w-full xl:flex-row md:items-center md:justify-center xl:items-center xl:justify-between ">
      <div className=" w-full h-[23rem] md:h-[35rem] md:flex md:items-center md:justify-center  ">
        <div className="absolute bg-lGrayBlue right-0 top-0 w-48 md:w-96 md:h-[34rem] h-[27rem] xl:h-[28rem] xl:w-[50%] rounded-bl-[70px]"></div>
        <div className="z-20 absolute top-[7rem] left-2 w-[33rem] md:w-[50rem] md:inset-1/2 md:-translate-x-1/2 md:top-[7rem] xl:top-52 xl:translate-x-7 xl:w-[60%] ">
          <img
            src="./assets/images/illustration-devices.svg"
            alt="devices"
            className="w-full drop-shadow-xl"
          />
        </div>
      </div>
      <section className="flex flex-col gap-5 my-6 xl:order-first md:items-center md:justify-center xl:gap-8 xl:items-start xl:mt-24 2xl:mt-40">
        <p className="flex gap-3 uppercase tracking-[5px] text-grayBlue md:text-xl xl:gap-6 xl:tracking-[8px]">
          <span className="px-3 font-bold tracking-normal text-white bg-black rounded-full bg-vDarkBlue text-lGrayBlue">
            NEW
          </span>
          Monograph Dashboard
        </p>
        <h1 className="text-4xl font-bold tracking-wider text-vDarkBlue md:text-6xl md:text-center xl:text-start">
          POWERFUL INSIGHTS INTO YOUR TEAM
        </h1>
        <p className="text-xl font-Barlow text-dGrayBlue md:text-2xl xl:text-xl xl:w-[320px]">
          Project planning and time tracking for agile teams
        </p>
        <div className="flex items-center justify-start gap-4 md:text-2xl xl:text-lg xl:gap-8 xl:pt-16 ">
          <button className="px-6 py-2 font-bold tracking-wide duration-300 rounded-md bg-red text-lGrayBlue xl:py-3 hover:opacity-70 ">
            SCHEDULE A DEMO
          </button>
          <span className="tracking-widest xl:tracking-[6px] text-grayBlue">
            TO SEE A PREVIEW
          </span>
        </div>
      </section>
    </section>
  );
}
