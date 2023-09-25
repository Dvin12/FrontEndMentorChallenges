export default function Summary({ results }) {
  function getBgColors(i) {
    const BackgroundColors = [
      "hsl(0,100%, 67%, 10%)",
      "hsl(39,100%,56%, 10%)",
      "hsl(166,100%,37%,10%)",
      "hsl(234,85%,45%, 10%)",
    ];

    return BackgroundColors[i % BackgroundColors.length];
  }

  function getTextColors(i) {
    const textColors = [
      "hsl(0,100%, 67%)",
      "hsl(39,100%,56%)",
      "hsl(166,100%,37%)",
      "hsl(234,85%,45%)",
    ];
    return textColors[i % textColors.length];
  }

  return (
    <article className="px-8 gap-6 flex flex-col justify-center py-8 md:py-0  ">
      <h3 className="md:text-2xl text-xl">Summary</h3>
      <ul className="flex flex-col gap-5  w-full">
        {results.map((result, i) => (
          <li
            key={i}
            className={"rounded-lg flex items-center justify-between p-4"}
            style={{ backgroundColor: getBgColors(i) }}
          >
            <div className="flex gap-3">
              <img src={result.icon} alt="" />
              <span
                className="font-semibold"
                style={{ color: getTextColors(i) }}
              >
                {result.category}
              </span>
            </div>
            <span className="font-semibold">
              {result.score} / <span className="text-gray-400">100</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button className="md:w-[300px] w-full bg-[hsl(224,30%,27%)] hover:bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] duration-300 transition-all mt-2 md:p-4 p-5 rounded-full text-white text-xl md:text-base">
          Continue
        </button>
      </div>
    </article>
  );
}
