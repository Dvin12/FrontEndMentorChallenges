export default function Card({ card, num }) {
  const { name, text, image } = card;
  return (
    <article
      className={`w-full ${num === 1 && "mt-20"} ${
        num === 2 && "mt-40"
      } bg-[#fff] flex flex-col items-center justify-center text-center px-6 py-8 relative rounded-lg xl:text-left xl:items-start xl:px-14 xl:py-14 drop-shadow-lg`}
    >
      <div className="absolute p-6 rounded-full bg-dViolet -top-10">
        <img src={image} alt={`illustration of ${name}`} />
      </div>
      <h3 className="mt-10 text-2xl font-bold text-dViolet">{name}</h3>
      <p className="my-5 font-medium text-gViolet xl:text-lg">{text}</p>
    </article>
  );
}
