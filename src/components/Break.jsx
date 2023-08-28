export default function Break() {
  return (
    <article className="w-full bg-gradient-to-b h-[40rem] mt-64 from-bodyGrayBlue to-bodyDesaturatedBlue flex items-center justify-center relative flex-col text-white px-6 xl:items-end rounded-bl-[100px] rounded-tr-[100px] overflow-hidden xl:h-[24rem] xl:mt-0">
      <div className="absolute w-[38rem] xl:w-full  -top-60 xl:top-auto xl:-bottom-40 xl:-left-40">
        <img src="./assets/images/bg-pattern-circles.svg" alt="" className="" />
      </div>
      <section className="z-30 flex flex-col xl:w-[40%]  justify-center">
        <h2 className="z-30 mt-40 text-4xl text-center xl:mt-10 font-ubuntu xl:text-left">
          State of the Art Infrastructure
        </h2>
        <p className="z-30 pt-6 text-lg leading-relaxed text-center xl:text-left xl:w-[35rem] ">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </section>
    </article>
  );
}
