import Button from "./Button";

export default function GetStarted() {
  return (
    <section className="relative flex flex-col items-center justify-center px-12 py-20 text-center bg-brightRed text-veryLightGray xl:flex-row xl:justify-between xl:px-44 xl:text-left xl:w-full">
      <h3 className="text-3xl font-bold leading-normal tracking-wide xl:text-5xl  xl:w-[100%]">
        Simplify how your team works today.
      </h3>
      <div className="z-10 mt-4 xl:w-full xl:flex xl:justify-end">
        <Button colour="gray">Get Started</Button>
      </div>
      <div className="">
        <img
          src="./assets/images/bg-simplify-section-mobile.svg"
          alt="background"
          className="absolute block -left-4 top-6 -z-0 xl:hidden"
        />
        <img
          src="./assets/images/bg-simplify-section-desktop.svg"
          alt="background"
          className="absolute hidden w-fit -right-40 -top-[40%] xl:block -z-0"
        />
      </div>
    </section>
  );
}
