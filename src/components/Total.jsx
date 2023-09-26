export default function Total({ totalBackers, backed }) {
  return (
    <article className="z-40 flex flex-col items-center justify-center w-full px-6 xl:px-12 xl:py-6 rounded-md shadow-lg bg-[#fff] xl:mt-6 ">
      <div className="xl:w-full xl:flex xl:justify-start">
        <section className="flex flex-col items-center justify-center   border-b-[1px] border-cyan py-6 gap-2 xl:border-r-[1px] xl:border-b-0 xl:pr-10 xl:w-full ">
          <h3 className="w-full text-4xl font-bold text-center xl:text-left">
            ${backed.toLocaleString()}
          </h3>
          <p className="w-full text-sm text-center xl:text-left text-dCyan ">
            of $100,000 backed
          </p>
        </section>
        <section className="flex flex-col items-center justify-center border-b-[1px] gap-2 border-cyan  py-6 xl:border-b-0 xl:pl-10 xl:pr-24 xl:border-r-[1px] xl:w-full  ">
          <h3 className="text-4xl font-bold xl:w-full">
            {totalBackers.toLocaleString()}
          </h3>
          <p className="text-sm xl:w-full text-dCyan">total backers</p>
        </section>
        <section className="flex flex-col items-center justify-center xl:w-full xl:border-b-0 xl:pl-10 xl:pr-24 xl:gap-2 ">
          <h3 className="py-4 text-4xl font-bold xl:w-full xl:py-0">56</h3>
          <p className="text-sm xl:w-full text-dCyan">days left</p>
        </section>
      </div>
      <input
        type="range"
        className="w-full my-6 overflow-hidden rounded-lg appearance-none bg-cyan bg-opacity-40"
        min={0}
        max={100000}
        value={backed}
      />
    </article>
  );
}
