export default function CardFront({
  cardName,
  cardNumber,
  cardMonth,
  cardYear,
}) {
  const formatCardNumber = (number) => {
    return number.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
  };

  return (
    <div className="md:w-fit h-fit  absolute xl:right-[10%] md:left-auto top-44 xl:top-0  left-6 z-10 w-[300px] ">
      <div className="relative w-fit h-fit bg-transparent">
        <img
          src="./assets/images/bg-card-front.png"
          alt=""
          className=" shadow-2xl "
        />
        <article className="absolute top-0 xl:p-8 p-3 h-full w-full ">
          <section className="flex xl:gap-4 gap-2 items-center  ">
            <div className="bg-white xl:w-[50px] w-[30px] h-[30px] xl:h-[50px] rounded-full"></div>
            <div className="border-2 xl:w-[30px] xl:h-[30px] w-[20px] h-[20px] rounded-full"></div>
          </section>
          <section className="flex flex-col justify-end w-full xl:h-[140px] h-[75%] text-white tracking-widest ">
            <h4 className="xl:text-3xl md:text-xl my-2">
              {cardNumber === ""
                ? "0000 0000 0000 0000"
                : formatCardNumber(cardNumber)}
            </h4>
            <section className="flex justify-between items-start capitalize">
              <h5> {cardName === "" ? "Rob Banks" : cardName}</h5>
              <h6>{`${
                cardMonth === ""
                  ? "01"
                  : cardMonth < 9
                  ? `0${cardMonth}`
                  : cardMonth
              }/${
                cardYear === "" || 0
                  ? "00"
                  : cardYear < 9
                  ? `0${cardYear}`
                  : cardYear
              }`}</h6>
            </section>
          </section>
        </article>
      </div>
    </div>
  );
}
