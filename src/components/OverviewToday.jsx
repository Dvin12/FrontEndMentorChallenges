import TodayCard from "./TodayCard";

export default function OverviewToday({ analyticData }) {
  return (
    <section className="grid grid-rows-1 gap-4">
      <h2 className="mt-8 text-2xl font-bold">Overview - Today</h2>
      {analyticData.map((card) => (
        <TodayCard card={card} key={card.id} />
      ))}
    </section>
  );
}
