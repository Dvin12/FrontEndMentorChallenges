import Button from "./Button";

export default function Card({ card }) {
  console.log(card);
  return (
    <article className=" bg-[#fff] w-full p-6 shadow-lg rounded-md flex relative flex-col">
      <section className="w-full my-3">
        <img
          src={card.logo}
          alt={card.company}
          className="absolute -top-8 w-[4rem]"
        />
        <div className="flex items-center justify-start gap-3 my-2 ">
          <span className="font-bold text-desaturatedCyan">{card.company}</span>
          <div className="flex items-center justify-center gap-2 font-medium text-lCyan">
            <span className="px-3 py-1 rounded-full bg-desaturatedCyan ">
              NEW!
            </span>
            <span className="px-3 py-1 rounded-full bg-veryDCyan">
              FEATURED
            </span>
          </div>
        </div>
        <div className="my-3">
          <span className="font-bold">{card.position}</span>
          <ul className="flex gap-4 pb-4 mt-2 font-medium border-b text-dCyan">
            <li>{card.postedAt}</li>
            <li className="flex gap-2">
              <span>&#9679;</span>
              {card.contract}
            </li>
            <li className="flex gap-2">
              <span>&#9679;</span>
              {card.location}
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-wrap items-center gap-4">
        <Button className="px-3 py-2 font-bold rounded-md bg-Cyan text-dCyan">
          {card.role}
        </Button>
        <Button>{card.level}</Button>
        {card.languages.map((language, i) => (
          <Button
            key={i}
            className="px-3 py-2 font-bold rounded-md bg-Cyan text-dCyan"
          >
            {language}
          </Button>
        ))}
        {card.tools.map((tool) => (
          <Button className="px-3 py-2 font-bold rounded-md bg-Cyan text-dCyan">
            {tool}
          </Button>
        ))}
      </section>
    </article>
  );
}
