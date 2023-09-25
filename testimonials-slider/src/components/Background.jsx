export default function Background() {
  return (
    <>
      <img
        src="./assets/images/pattern-curve.svg"
        className="absolute bottom-0 h-[14%] lg:h-[25%]"
      />
      <img
        src="./assets/images/pattern-quotes.svg"
        className="absolute top-[50%] lg:top-[30%] lg:left-[22%] left-[40%] w-[15%] lg:w-auto"
      />
      <img
        src="./assets/images/pattern-bg.svg"
        className="absolute right-[5%] lg:right-[17%] lg:top-[14%] top-[6%] w-[90%] lg:w-auto -z-10"
      />
    </>
  );
}
