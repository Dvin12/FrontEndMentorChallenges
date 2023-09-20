export default function Feature({ feature, number }) {
  const { name, text } = feature;
  const num = number + 1;
  return (
    <article>
      <div className="flex items-center gap-3 ml-4 rounded-tl-full rounded-bl-full bg-veryPaleRed">
        <span className="px-5 py-1 rounded-full bg-brightRed text-veryLightGray">
          {num < 9 ? `0${number + 1}` : num}
        </span>
        <h3 className="font-bold text-darkBlue">{name}</h3>
      </div>
      <p className="px-4 pt-3 pb-8 text-sm leading-relaxed text-darkGrayBlue">
        {text}
      </p>
    </article>
  );
}
