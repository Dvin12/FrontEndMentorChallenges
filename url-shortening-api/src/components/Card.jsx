export default function Card({ card }) {
  const { name, text, image } = card;
  return (
    <article className="w-full bg-[#fff] flex flex-col items-center justify-center text-center px-6 py-8 relative rounded-lg">
      <div className=" bg-dViolet rounded-full p-6 absolute -top-10">
        <img src={image} alt={`illustration of ${name}`} />
      </div>
      <h3 className="text-2xl font-bold mt-10 text-dViolet">{name}</h3>
      <p className="my-5  text-gViolet font-medium">{text}</p>
    </article>
  );
}
