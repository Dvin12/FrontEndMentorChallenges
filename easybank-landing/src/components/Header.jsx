import Button from "./Button";

export default function Header() {
  return (
    <header className="z-30 grid grid-cols-1 grid-rows-1 xl:grid-cols-2 xl:w-full ">
      <section className="relative xl:order-last xl:flex xl:justify-end xl:items-end xl:w-[126%] xl:-mt-10 2xl:-mt-36 ">
        <img
          src="./images/bg-intro-mobile.svg"
          alt="background"
          className="block w-full xl:hidden"
        />
        <img
          src="./images/bg-intro-desktop.svg"
          alt="background"
          className="hidden w-full xl:block"
        />
        <img
          src="./images/image-mockups.png"
          alt="phones"
          className="absolute px-4 -translate-x-1/2 -top-14 left-1/2 xl:top-28 xl:-translate-x-[33%] 2xl:-translate-x-[36%] xl:w-[70%] 2xl:w-fit drop-shadow-xl"
        />
      </section>
      <section className="flex flex-col items-center justify-center px-4 text-center text-gBlue xl:items-start xl:text-left 2xl:pl-40 xl:pl-16">
        <h1 className="text-4xl leading-tight 2xl:text-6xl text-dBlue xl:w-[30rem] 2xl:w-[34rem] xl:text-5xl xl:leading-[1.12] ">
          Next generation digital banking
        </h1>
        <p className="my-4 font-normal leading-relaxed xl:text-xl xl:w-[32rem] ">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <div className="mt-5 mb-20 xl:mb-0">
          <Button>Request Invite</Button>
        </div>
      </section>
    </header>
  );
}
