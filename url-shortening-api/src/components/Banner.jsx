import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-5 px-6 py-24 overflow-hidden text-center bg-dViolet">
      <h4 className="text-2xl text-[#fff] font-bold z-30">
        Boost your links today
      </h4>
      <div className="z-30">
        <Button>Get Started</Button>
      </div>
      <img
        src="./images/bg-boost-mobile.svg"
        alt="background"
        className="absolute top-0 right-0 w-full"
      />
    </section>
  );
}
