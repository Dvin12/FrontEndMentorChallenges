export default function Header({ handleClick, annually }) {
  return (
    <header className="flex flex-col items-center z-30 my-14 gap-8">
      <h1 className="text-center text-3xl text-grayishBlue ">Our Pricing</h1>
      <section className="flex items-center justify-center gap-4 text-lGrayishBlue text-sm">
        <span>Annually</span>
        <button
          className="relative flex items-center justify-center bg-gradient-to-r from-gradient1 to-gradient2 py-2 px-1 rounded-3xl w-[70px] h-[38px]"
          onClick={handleClick}
        >
          <div
            className={`w-[30px] bg-[#fff] h-[30px] rounded-full absolute top-1 ${
              annually ? " left-[5px]" : "left-[35px]"
            } duration-200 `}
          ></div>
        </button>
        <span>Monthly</span>
      </section>
    </header>
  );
}
