import Button from "./Button";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center xl:flex-row ">
      <section className="relative px-3 py-8 xl:order-last xl:w-[110rem]">
        <img
          src="./assets/images/illustration-hero.svg"
          alt="image"
          className="relative z-30 xl:w-full "
        />
        <div className="absolute right-0 z-20 h-52 w-80 xl:w-[75%] top-24 bg-sBlue rounded-tl-[6rem] xl:h-[70%] rounded-bl-[6rem] xl:bottom-0 xl:top-auto xl:rounded-bl-[13rem]"></div>
      </section>
      <section className="flex flex-col items-center justify-center px-8 my-8 text-center xl:w-full xl:px-44 xl:text-left xl:items-start">
        <h1 className="text-3xl font-medium leading-snug xl:text-5xl text-vDarkBlue xl:w-[30rem]">
          A Simple Bookmark Manager
        </h1>
        <p className="my-3 leading-relaxed text-gBlue xl:text-xl xl:my-6 xl:w-[100%] 2xl:w-[80%] ">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex items-center justify-center w-full gap-2 my-4 xl:justify-start xl:gap-4">
          <Button>Get it on Chrome</Button>
          <Button>Get it on Firefox</Button>
        </div>
      </section>
    </header>
  );
}
