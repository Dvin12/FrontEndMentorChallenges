import Button from "./Button";

export default function Card({ card, filtered, setFiltered }) {
  function handleFilter(filter) {
    if (!filtered.includes(filter)) {
      setFiltered([...filtered, filter]);
    }
  }

  return (
    <article
      className={` bg-[#fff] w-full p-6 shadow-lg rounded-md flex relative flex-col ${
        filtered.length >= 3 && "mt-24"
      }`}
    >
      {card.new &&
        (card.featured ? (
          <span className="absolute top-0 w-[6px] h-full -left-0 rounded-tl-md rounded-bl-md  bg-desaturatedCyan"></span>
        ) : (
          ""
        ))}

      <section className="w-full my-3">
        <img
          src={card.logo}
          alt={card.company}
          className="absolute -top-8 w-[4rem]"
        />

        <div className="flex items-center justify-start gap-3 my-2 ">
          <span className="font-bold text-desaturatedCyan">{card.company}</span>

          <div className="flex items-center justify-center gap-2 font-medium text-lCyan">
            {card.new && (
              <span className="px-3 py-1 rounded-full bg-desaturatedCyan ">
                NEW!
              </span>
            )}
            {card.featured && (
              <span className="px-3 py-1 rounded-full bg-veryDCyan">
                FEATURED
              </span>
            )}
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
        <Button onClick={() => handleFilter(card.role)}>{card.role}</Button>
        <Button onClick={() => handleFilter(card.level)}>{card.level}</Button>
        {card.languages.map((language, i) => (
          <Button key={i} onClick={() => handleFilter(language)}>
            {language}
          </Button>
        ))}
        {card.tools.map((tool, i) => (
          <Button key={i} onClick={() => handleFilter(tool)}>
            {tool}
          </Button>
        ))}
      </section>
    </article>
  );
}
