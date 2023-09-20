import Button from "./Button";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center px-6">
      <section className="flex items-center justify-center ">
        <img
          src="./assets/images/illustration-intro.svg"
          alt="statistics mockup"
        />
      </section>
      <section className="flex flex-col items-center justify-center text-center w-full my-5 text-darkGrayBlue">
        <h1 className="text-4xl font-semibold leading-snug  text-darkBlue">
          Bring everyone together to build better products.
        </h1>
        <p className="py-2 leading-relaxed ">
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
