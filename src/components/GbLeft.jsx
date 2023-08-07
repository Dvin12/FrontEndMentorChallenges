export default function GbLeft() {
  return (
    <section className="absolute top-40 left-[18%] md:left-auto md:top-auto md:bottom-40 md:right-12">
      <div className="bg-white py-6 px-8 rounded-xl flex items-center gap-3  font-extrabold relative">
        <span className="text-5xl">185</span>
        <span className="text-[hsl(229,7%,55%)]">GB LEFT</span>
        <div
          className=" hidden md:flex absolute top-20 right-0 w-0 h-0 border-l-[50px] border-l-transparent
   border-t-[50px]  border-t-white
   border-r-[1px] border-r-transparent"
        ></div>
      </div>
    </section>
  );
}
