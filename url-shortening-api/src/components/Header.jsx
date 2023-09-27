export default function Header() {
  return (
    <header className=" grid-cols-1 grid-rows-1 ">
      <section className="flex items-end justify-end w-[140%]">
        <img
          src="./images/illustration-working.svg"
          alt="header illustration"
          className=" w-[95%]"
        />
      </section>

      <section className="flex flex-col items-center justify-center my-10 text-center px-6">
        <h1 className="text-4xl font-bold  leading-tight text-dViolet ">
          More than just shorter links
        </h1>
        <p className="my-4 font-medium tracking-wide px-2 text-gViolet leading-relaxed">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="my-6 mb-32">
          <button className="bg-Gray px-10 py-3 rounded-full font-bold text-[#fff] text-lg tracking-wider">
            Get Started
          </button>
        </div>
      </section>
    </header>
  );
}
