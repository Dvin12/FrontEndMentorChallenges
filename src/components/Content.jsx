export default function Content() {
  return (
    <section className="flex flex-col w-full md:items-center md:justify-center ">
      <div className=" w-full h-[23rem] md:h-[35rem] md:flex md:items-center md:justify-center ">
        <div className="absolute bg-lGrayBlue right-0 top-0 w-48 md:w-96 md:h-[34rem] h-[27rem] rounded-bl-[70px]"></div>
        <div className="z-20 absolute top-[7rem] left-2 w-[33rem] md:w-[50rem] md:inset-1/2 md:-translate-x-1/2 md:top-[7rem] ">
          <img
            src="./assets/images/illustration-devices.svg"
            alt="devices"
            className="w-full"
          />
        </div>
      </div>
      <section className="flex flex-col gap-5 my-6 md:items-center md:justify-center">
        <p className="flex gap-3 uppercase tracking-[5px] text-grayBlue md:text-xl">
          <span className="px-3 font-bold tracking-normal text-white bg-black rounded-full bg-vDarkBlue text-lGrayBlue">
            NEW
          </span>
          Monograph Dashboard
        </p>
        <h1 className="text-4xl font-bold tracking-wider text-vDarkBlue md:text-6xl md:text-center">
          POWERFUL INSIGHTS INTO YOUR TEAM
        </h1>
        <p className="text-xl font-Barlow text-dGrayBlue md:text-2xl">
          Project planning and time tracking for agile teams
        </p>
        <div className="flex items-center justify-start gap-4 md:text-2xl ">
          <button className="px-6 py-2 font-bold tracking-wide rounded-md bg-red text-lGrayBlue ">
            SCHEDULE A DEMO
          </button>
          <span className="tracking-widest text-grayBlue">
            TO SEE A PREVIEW
          </span>
        </div>
      </section>
    </section>
  );
}
