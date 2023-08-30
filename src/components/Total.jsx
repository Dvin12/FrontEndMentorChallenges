export default function Total({ totalBackers, backed }) {
  return (
    <article className="z-40 flex flex-col items-center justify-center w-full px-6 rounded-md shadow-lg bg-[#fff] ">
      <section className="flex flex-col items-center justify-center  border-b-[1px] border-b-cyan py-6 gap-2 ">
        <h3 className="text-4xl font-bold">${backed.toLocaleString()}</h3>
        <p className="text-sm text-dCyan ">of $100,000 backed</p>
      </section>
      <section className="flex flex-col items-center justify-center border-b-[1px] gap-2 border-b-cyan  py-6 ">
        <h3 className="text-4xl font-bold">{totalBackers.toLocaleString()}</h3>
        <p className="text-sm text-dCyan">total backers</p>
      </section>
      <section className="flex flex-col items-center justify-center ">
        <h3 className="py-4 text-4xl font-bold">56</h3>
        <p className="text-sm text-dCyan">days left</p>
      </section>
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
