export default function CardBack({ cardCvc }) {
  return (
    <div className=" md:w-fit h-fit absolute xl:top-72 xl:right-0 md:top-[260px] top-10 w-[300px] right-10 z-1">
      <div className="relative w-fit h-fit">
        <img
          src="./assets/images/bg-card-back.png"
          alt=""
          className="w-full h-full drop-shadow-2xl"
        />
        <article className="absolute xl:top-[45%] md:top-[45%] xl:right-10 md:right-[30px] right-5 top-[70px]">
          <span className="p-4 text-white">
            {cardCvc === "" ? "000" : cardCvc}
          </span>
        </article>
      </div>
    </div>
  );
}
