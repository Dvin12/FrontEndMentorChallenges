import Button from "./Button.jsx";

export default function Header() {
  return (
    <header className="w-full h-full relative text-grayBlue ">
      <img src="./assets/images/bg-header-mobile.png" alt="background" />
      <section className="w-full flex flex-col items-center justify-normal z-30 text-center  px-[2.2rem]  ">
        <img
          src="./assets/images/logo.svg"
          alt="company"
          className="absolute top-40"
        />
        <h1 className="text-3xl font-bold text-dBlue ">
          A history of everything you copy
        </h1>
        <p className="my-10  leading-relaxed ">
          Clipboard allow you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <section className="flex flex-col gap-6 w-full my-3">
          <Button>Download for iOS</Button>
          <Button color="bg-lBlue">Download for Mac</Button>
        </section>
      </section>
    </header>
  );
}
