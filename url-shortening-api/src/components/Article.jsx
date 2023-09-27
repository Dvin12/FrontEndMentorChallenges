import Card from "./Card";

const cards = [
  {
    name: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    image: "./images/icon-brand-recognition.svg",
  },

  {
    name: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    image: "./images/icon-detailed-records.svg",
  },

  {
    name: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    image: "./images/icon-fully-customizable.svg",
  },
];

export default function Article() {
  return (
    <article className="pt-44 px-6">
      <section className="flex flex-col items-center justify-center text-center text-gViolet">
        <h2 className="text-2xl font-bold text-veryDarkBlue">
          Advanced Statistics
        </h2>
        <p className="my-6 leading-relaxed font-medium ">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </section>
      <section className="my-16 flex flex-col items-center justify-center gap-24 relative">
        {cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
        <div className="absolute top-0 h-full  bg-gViolet w-2 -z-10"></div>
      </section>
    </article>
  );
}
