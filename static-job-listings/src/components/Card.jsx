import Button from "./Button";

export default function Card({ card, filtered, setFiltered }) {
  function handleFilter(filter) {
    if (!filtered.includes(filter)) {
      setFiltered([...filtered, filter]);
    }
  }

  return (
    <article
      className={` bg-[#fff] w-full p-6 shadow-lg rounded-md flex relative flex-col xl:flex-row xl:justify-between ${
        filtered.length >= 3 && "mt-24 xl:mt-0"
      }`}
    >
      {card.new &&
        (card.featured ? (
          <span className="absolute top-0 w-[6px] h-full -left-0 rounded-tl-md rounded-bl-md  bg-desaturatedCyan"></span>
        ) : (
          ""
        ))}

      <section className="w-full my-3 xl:gap-6 xl:flex xl:items-center">
        <img
          src={card.logo}
          alt={card.company}
          className="absolute -top-8 w-[4rem] xl:static xl:w-[6rem]"
        />

        <div className="items-start xl:flex xl:flex-col xl:justify-center">
          <div className="flex items-center justify-start gap-3 my-2 ">
            <span className="font-bold text-desaturatedCyan">
              {card.company}
            </span>

            <div className="flex items-center justify-center gap-2 font-medium text-lCyan xl:text-sm">
              {card.new && (
                <span className="px-3 py-1 rounded-full xl:px-2 bg-desaturatedCyan ">
                  NEW!
                </span>
              )}
              {card.featured && (
                <span className="px-3 py-1 rounded-full xl:px-2 bg-veryDCyan">
                  FEATURED
                </span>
              )}
            </div>
          </div>

          <div className="my-3 xl:my-0">
            <span className="font-bold">{card.position}</span>
            <ul className="flex gap-4 pb-4 mt-2 font-medium border-b xl:border-none xl:pb-0 text-dCyan">
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
        </div>
      </section>
      <section className="flex flex-wrap items-center gap-4 xl:flex-nowrap">
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
