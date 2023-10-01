export default function Card({ card }) {
  const { image, author, title, text } = card;
  return (
    <article className="flex flex-col items-start justify-center overflow-hidden bg-white shadow-sm rounded-xl xl:items-center xl:justify-normal xl:w-full ">
      <div className=" 2xl:h-[250px] xl:h-[200px] xl:w-full w-full">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
      <section className="flex flex-col items-start justify-center gap-3 p-6 xl:p-10">
        <span className="text-xs text-gBlue">By {author}</span>
        <h5 className="text-lg duration-300 cursor-pointer text-dBlue hover:text-lGreen hover:brightness-75 hover:opacity-60">
          {title}
        </h5>
        <p className="text-md text-gBlue ">{text}</p>
      </section>
    </article>
  );
}
