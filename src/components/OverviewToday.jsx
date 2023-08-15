import TodayCard from "./TodayCard";

export default function OverviewToday({ overviewData }) {
  return (
    <section className="grid grid-rows-1 gap-4">
      <h2 className="mt-8 text-2xl font-bold text-lightTextSmall dark:text-darkSmallText">
        Overview - Today
      </h2>
      {overviewData.map((card) => (
        <TodayCard card={card} key={card.id} />
      ))}
    </section>
  );
}
