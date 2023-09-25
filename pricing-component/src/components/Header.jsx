export default function Header({ handleClick, annually }) {
  return (
    <header className="z-30 flex flex-col items-center gap-8 my-14">
      <h1 className="text-3xl text-center text-grayishBlue ">Our Pricing</h1>
      <section className="flex items-center justify-center gap-4 text-sm xl:gap-6 text-lGrayishBlue">
        <span>Annually</span>
        <button
          className="relative flex items-center justify-center bg-gradient-to-r from-gradient1 to-gradient2 py-2 px-1 rounded-3xl w-[70px] h-[38px] overflow-hidden"
          onClick={handleClick}
        >
          <div className="absolute top-0 w-full h-full transition hover:bg-[hsl(240,60%,80%)]">
            <div
              className={`w-[30px] bg-[#fff] h-[30px] rounded-full absolute top-1 ${
                annually ? " left-[5px]" : "left-[35px]"
              } duration-200 `}
            ></div>
          </div>
        </button>
        <span>Monthly</span>
      </section>
    </header>
  );
}
