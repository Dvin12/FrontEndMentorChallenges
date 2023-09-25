export default function Article({ title, paragraph }) {
  return (
    <>
      <section className="w-full flex items-center order-1 xl:order-none">
        <h2 className="xl:text-7xl text-6xl font-extrabold xl:w-[400px] ">
          {title}
        </h2>
      </section>

      <section className="flex flex-col items-start justify-between gap-8 w-full order-1">
        <p className=" w-full text-justify text-lg">{paragraph}</p>
        <button className="bg-[hsl(5,85%,63%)] px-14 py-4 text-[hsl(36,100%,99%)] tracking-[5px] font-semibold hover:bg-[hsl(240,100%,5%)] duration-300">
          READ MORE
        </button>
      </section>
    </>
  );
}
