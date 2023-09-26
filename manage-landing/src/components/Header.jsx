import Button from "./Button";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center px-6 xl:flex-row xl:px-44 xl:gap-10 xl:my-24">
      <section className="flex items-center justify-center xl:w-full xl:order-last xl:justify-center ">
        <img
          src="./assets/images/illustration-intro.svg"
          alt="statistics mockup"
          className="xl:w-[40rem]"
        />
      </section>
      <section className="flex flex-col items-center justify-center w-full my-5 text-center text-darkGrayBlue xl:text-left xl:items-start xl:w-full">
        <h1 className="text-4xl font-semibold leading-snug text-darkBlue xl:text-6xl xl:w-[40rem]">
          Bring everyone together to build better products.
        </h1>
        <p className="py-2 leading-relaxed xl:text-xl xl:py-6 xl:w-[31.2rem] ">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="my-5">
          <Button>Get Started</Button>
        </div>
      </section>
    </header>
  );
}
