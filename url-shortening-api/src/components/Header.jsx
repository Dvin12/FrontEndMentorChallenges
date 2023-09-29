import Button from "./Button";

export default function Header() {
  return (
    <header className="grid grid-cols-1 grid-rows-1 xl:grid-cols-2 xl:mb-32 ">
      <section className="flex items-end justify-end w-[140%] xl:items-center  xl:order-last">
        <img
          src="./assets/images/illustration-working.svg"
          alt="header illustration"
          className=" w-[95%] xl:w-full  "
        />
      </section>

      <section className="flex flex-col items-center justify-center px-6 my-10 text-center xl:text-left xl:items-start xl:pl-20 2xl:pl-40 xl:my-0 ">
        <h1 className="text-4xl font-bold leading-tight text-dViolet 2xl:text-7xl xl:text-6xl   xl:leading-[1.1] 2xl:leading-[1.1]">
          More than just shorter links
        </h1>
        <p className="px-2 my-4 font-medium leading-relaxed tracking-wide text-gViolet xl:px-0 xl:text-xl xl:w-[35rem]">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="my-6 mb-32 ">
          <Button text="text-xl" paddingY="xl:py-4" paddingX="px-8">
            Get started
          </Button>
        </div>
      </section>
    </header>
  );
}
