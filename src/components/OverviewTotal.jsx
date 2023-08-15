import TotalCard from "./TotalCard";

export default function OverviewTotal({ analyticData, isLoading }) {
  return (
    <section className="grid w-full h-full grid-rows-1 gap-6">
      {analyticData.map((card) => (
        <TotalCard card={card} key={card.id} />
      ))}
    </section>
  );
}
