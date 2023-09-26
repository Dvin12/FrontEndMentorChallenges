import Button from "./Button";

export default function Header() {
  return (
    <header className="font-Poppins font-bold w-full h-full px-6 py-5 xl:px-16 xl:py-20 ">
      <section className="flex justify-between items-center">
        <img
          src="./assets/images/logo.svg"
          alt="logo"
          className="w-1/3 xl:w-[16rem]"
        />
        <button className="border-2 rounded-full px-4 py-1 text-xs border-pink text-pink tracking-wide xl:px-7 xl:py-2 xl:text-base  xl:font-semibold xl:font-OpenSans hover:border-lPink duration-300 hover:shadow-md">
          Try It Free
        </button>
      </section>

      <section className="flex items-center justify-center flex-col mt-24 px-2 xl:mt-60  ">
        <h2 className=" text-2xl xl:text-5xl font-extrabold text-center">
          Build The Community Your Fans Will Love
        </h2>
        <p className="text-center xl:text-xl font-normal font-OpenSans my-8 text-sm xl:w-1/2 xl:my-10">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button />
      </section>
      <div className="flex w-full items-center justify-center mt-20 px-5 xl:px-36 xl:mt-24">
        <img
          src="./assets/images/screen-mockups.svg"
          className="w-full drop-shadow-sm xl:w-[70rem]"
        />
      </div>
      <section className="flex flex-col items-center justify-center w-full h-full my-28 gap-24 xl:flex-row xl:gap-80  ">
        <div className="flex flex-col items-start gap-4 ">
          <img
            src="./assets/images/icon-communities.svg"
            alt="communities"
            className="w-1/6 xl:w-[3rem] "
          />
          <label className="text-6xl text-cyan font-OpenSans xl:text-8xl">
            1.4k+
          </label>
          <span className=" text-cyan opacity-50 font-semibold text-sm font-OpenSans w-full xl:text-2xl xl:pt-8 ">
            Communities Formed
          </span>
        </div>

        <div className="flex flex-col items-start  gap-4  ">
          <img
            src="./assets/images/icon-messages.svg"
            alt="communities"
            className="w-1/6 xl:w-[3rem]  "
          />
          <label className="text-6xl text-cyan font-OpenSans xl:text-8xl">
            2.7m+
          </label>
          <span className=" text-cyan opacity-50 font-semibold text-sm font-OpenSans w-full text-center xl:text-2xl xl:pt-8">
            Messages Sent
          </span>
        </div>
      </section>
    </header>
  );
}
