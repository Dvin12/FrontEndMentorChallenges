export default function Break() {
  return (
    <article className="w-full bg-gradient-to-b h-[40rem] mt-64 from-bodyGrayBlue to-bodyDesaturatedBlue flex items-center justify-center relative flex-col text-white px-6 rounded-bl-[100px] rounded-tr-[100px] overflow-hidden">
      <div className="absolute w-[38rem]  -top-60">
        <img src="./assets/images/bg-pattern-circles.svg" alt="" className="" />
      </div>
      <h2 className="font-ubuntu z-30 text-4xl text-center mt-40">
        State of the Art Infrastructure
      </h2>
      <p className=" text-center z-30 leading-relaxed text-lg pt-6 ">
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </p>
    </article>
  );
}
