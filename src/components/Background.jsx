export default function Background() {
  return (
    <>
      <div className="absolute w-[120%] -top-[1.2%] md:-top-[10%] md:left-[10%] left-[5%] -z-10 xl:w-[60%] xl:left-auto xl:-right-[10rem] xl:-top-[10rem] 2xl:-right-[16%] 2xl:-top-[12%]">
        <img
          src="./assets/images/bg-tablet-pattern.svg"
          alt="bacground"
          className="w-[30rem] md:w-full"
        />
      </div>

      <div className="absolute w-[120%] md:w-fit top-[14%] left-[60%]   -z-10 md:left-auto md:-right-[80%] md:top-[10%] xl:w-full xl:-left-[25%] xl:bottom-[27%] xl:top-auto">
        <img
          src="./assets/images/bg-tablet-pattern.svg"
          alt="bacground"
          className="w-[25rem] md:w-fit"
        />
      </div>
    </>
  );
}
