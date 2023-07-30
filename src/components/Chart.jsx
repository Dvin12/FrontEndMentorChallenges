import Block from "./Block";

export default function Chart({ chart }) {
  console.log(chart);
  return (
    <section className="md:w-[500px] h-full  bg-[hsl(33,100%,98%)] rounded-2xl  px-8 py-10 flex flex-col justify-between">
      <h2 className="text-2xl font-bold text-[hsl(25,47%,15%)]">
        Spending - Last 7 days
      </h2>
      <div className="flex w-full justify-between my-6 mt-16 ">
        {chart.map((block, i) => (
          <ul key={i}>
            <Block block={block} />
          </ul>
        ))}
      </div>
      <div className="flex justify-between items-end border-t-[2px] border-[hsl(27,66%,92%)] pt-8">
        <div className="flex flex-col justify-center gap-2">
          <span className="text-[hsl(28,10%,53%)]">Total this month</span>
          <span className="md:text-5xl text-4xl font-bold text-[hsl(25,47%,15%)]">
            $478.33
          </span>
        </div>
        <div className="flex flex-col items-end justify-between">
          <span className="font-bold text-[hsl(25,47%,15%)]">+2.4%</span>
          <span className="text-[hsl(28,10%,53%)]">from last month</span>
        </div>
      </div>
    </section>
  );
}
