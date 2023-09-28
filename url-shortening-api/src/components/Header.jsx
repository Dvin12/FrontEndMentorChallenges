import Button from "./Button";

export default function Header() {
  return (
    <header className="grid-cols-1 grid-rows-1 ">
      <section className="flex items-end justify-end w-[140%]">
        <img
          src="./images/illustration-working.svg"
          alt="header illustration"
          className=" w-[95%]"
        />
      </section>

      <section className="flex flex-col items-center justify-center px-6 my-10 text-center">
        <h1 className="text-4xl font-bold leading-tight text-dViolet ">
          More than just shorter links
        </h1>
        <p className="px-2 my-4 font-medium leading-relaxed tracking-wide text-gViolet">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="my-6 mb-32">
          <Button>Get started</Button>
        </div>
      </section>
    </header>
  );
}
