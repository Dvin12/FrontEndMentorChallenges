import Button from "./Button";

export default function Header() {
  return (
    <header className="font-Poppins font-bold w-full h-full px-6 py-5 ">
      <section className="flex justify-between items-center">
        <img src="./assets/images/logo.svg" alt="logo" className="w-1/3" />
        <button className="border-2 rounded-full px-4 py-1 text-xs border-pink text-pink tracking-wide">
          Try It Free
        </button>
      </section>

      <section className="flex items-center justify-center flex-col mt-24 px-2  ">
        <h2 className=" text-2xl font-extrabold text-center">
          Build The Community Your Fans Will Love
        </h2>
        <p className="text-center font-normal font-OpenSans my-8 text-sm">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button />
      </section>
      <div className="flex w-full items-center justify-center mt-20 px-5">
        <img
          src="./assets/images/screen-mockups.svg"
          className="w-full drop-shadow-sm"
        />
      </div>
      <section className="flex flex-col items-center justify-center w-full h-full my-28 gap-24">
        <div className="flex flex-col items-start   gap-4">
          <img
            src="./assets/images/icon-communities.svg"
            alt="communities"
            className="w-1/6"
          />
          <label className="text-6xl text-cyan font-OpenSans">1.4k+</label>
          <span className=" text-cyan opacity-50 font-semibold text-sm font-OpenSans w-full">
            Communities Formed
          </span>
        </div>

        <div className="flex flex-col items-start  gap-4">
          <img
            src="./assets/images/icon-messages.svg"
            alt="communities"
            className="w-1/6"
          />
          <label className="text-6xl text-cyan font-OpenSans">2.7m+</label>
          <span className=" text-cyan opacity-50 font-semibold text-sm font-OpenSans w-full text-center">
            Messages <br /> Sent
          </span>
        </div>
      </section>
    </header>
  );
}
