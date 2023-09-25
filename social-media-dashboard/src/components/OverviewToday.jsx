import TodayCard from "./TodayCard";

export default function OverviewToday({ overviewData }) {
  return (
    <section className="w-full h-full ">
      <h2 className="mt-12 text-2xl font-bold text-lightTextSmall dark:text-darkBigText">
        Overview - Today
      </h2>
      <section className="grid w-full h-full grid-rows-1 gap-4 my-6 xl:grid-cols-4 xl:grid-rows-2">
        {overviewData.map((card, i) => (
          <TodayCard card={card} key={i} />
        ))}
      </section>
    </section>
  );
}
