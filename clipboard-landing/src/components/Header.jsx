import Button from "./Button.jsx";

export default function Header() {
  return (
    <header className="relative w-full h-full ">
      <img
        src="./assets/images/bg-header-mobile.png"
        alt="background"
        className="block w-full h-[24rem] md:h-[30rem] xl:hidden"
      />
      <img
        src="./assets/images/bg-header-desktop.png"
        alt="background"
        className="hidden w-full xl:block "
      />
      <section className="z-30 flex flex-col items-center w-full px-8 text-center justify-normal xl:text-xl ">
        <img
          src="./assets/images/logo.svg"
          alt="company"
          className="absolute top-40 "
        />
        <h1 className="text-3xl font-bold xl:text-5xl text-dBlue ">
          A history of everything you copy
        </h1>
        <p className="my-10 leading-relaxed xl:w-[45rem]  ">
          Clipboard allow you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <section className="flex flex-col w-full gap-6 my-3 xl:flex-row xl:items-center xl:justify-center">
          <Button>Download for iOS</Button>
          <Button color="bg-lBlue">Download for Mac</Button>
        </section>
      </section>
    </header>
  );
}
