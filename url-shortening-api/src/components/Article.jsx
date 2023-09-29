import Card from "./Card";

const cards = [
  {
    name: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    image: "./assets/images/icon-brand-recognition.svg",
  },

  {
    name: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    image: "./assets/images/icon-detailed-records.svg",
  },

  {
    name: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    image: "./assets/images/icon-fully-customizable.svg",
  },
];

export default function Article() {
  return (
    <article className="px-6 pt-44">
      <section className="flex flex-col items-center justify-center text-center text-gViolet">
        <h2 className="text-2xl font-bold xl:text-4xl text-veryDarkBlue">
          Advanced Statistics
        </h2>
        <p className="my-6 font-medium leading-relaxed xl:text-lg xl:w-1/2 2xl:w-1/3 ">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </section>
      <section className="relative flex flex-col items-center justify-center gap-24 my-20 xl:flex-row xl:gap-10 xl:px-10 2xl:px-40 xl:mt-0 xl:mb-40">
        {cards.map((card, i) => (
          <Card key={i} card={card} num={i} />
        ))}
        <div className="absolute w-2 h-full xl:top-1/2 xl:h-2 xl:w-[60%] bg-gViolet -z-10"></div>
      </section>
    </article>
  );
}
