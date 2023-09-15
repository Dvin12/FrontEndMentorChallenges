import Button from "./Button";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center ">
      <section className="relative px-3 py-8">
        <img
          src="./assets/images/illustration-hero.svg"
          alt="image"
          className="relative z-30"
        />
        <div className="absolute right-0 z-20 h-52 w-80 top-24 bg-sBlue rounded-tl-[6rem] rounded-bl-[6rem]"></div>
      </section>
      <section className="flex flex-col items-center justify-center px-8 my-8 text-center">
        <h1 className="text-3xl font-medium leading-snug text-vDarkBlue">
          A Simple Bookmark Manager
        </h1>
        <p className="my-3 leading-relaxed text-gBlue">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites loand instantly. Try it for free.
        </p>
        <div className="flex items-center justify-center w-full gap-2 my-4">
          <Button>Get it on Chrome</Button>
          <Button>Get it on Firefox</Button>
        </div>
      </section>
    </header>
  );
}
