import Button from "./Button";

export default function Header() {
  return (
    <header className="grid grid-cols-1 grid-rows-1">
      <section className="relative ">
        <img
          src="./images/bg-intro-mobile.svg"
          alt="background"
          className="w-full"
        />
        <img
          src="./images/image-mockups.png"
          alt="phones"
          className="absolute -top-14 left-1/2 -translate-x-1/2 px-4"
        />
      </section>
      <section className=" text-center flex flex-col items-center justify-center px-4  text-gBlue">
        <h1 className="text-4xl text-dBlue leading-tight ">
          Next generation digital banking
        </h1>
        <p className="my-4 font-normal leading-relaxed ">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <div className="my-4">
          <Button>Request Invite</Button>
        </div>
      </section>
    </header>
  );
}
