import Button from "./Button";

export default function GetStarted() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center px-14 bg-brightRed text-veryLightGray">
      <h3 className="text-3xl font-bold leading-normal tracking-wide">
        Simplify how your team works today.
      </h3>
      <div className="mt-4">
        <Button colour="gray">Get Started</Button>
      </div>
    </section>
  );
}
