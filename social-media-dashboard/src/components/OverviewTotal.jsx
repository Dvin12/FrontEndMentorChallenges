import TotalCard from "./TotalCard";

export default function OverviewTotal({ followersData }) {
  return (
    <section className="grid w-full h-full grid-rows-1 gap-6 xl:grid-cols-4">
      {followersData.map((card) => (
        <TotalCard card={card} key={card.id} />
      ))}
    </section>
  );
}
