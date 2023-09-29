import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-5 px-6 py-24 overflow-hidden text-center bg-dViolet">
      <h4 className="text-2xl text-[#fff] font-bold z-30 xl:text-5xl">
        Boost your links today
      </h4>
      <div className="z-30 xl:my-4">
        <Button text="text-xl" paddingX="px-4" paddingY="py-4">
          Get Started
        </Button>
      </div>
      <img
        src="./assets/images/bg-boost-mobile.svg"
        alt="background"
        className="absolute top-0 right-0 block w-full h-full xl:hidden"
      />
      <img
        src="./assets/images/bg-boost-desktop.svg"
        alt="background"
        className="absolute top-0 right-0 hidden w-full h-full xl:block"
      />
    </section>
  );
}
