export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full gap-11">
      <img
        src="./assets/images/illustration-1.svg"
        alt="illustration"
        className="mt-20"
      />
      <aside className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-2xl font-bold leading-normal tracking-wide text-center font-Raleway">
          All your files in one secure location, accessible anywhere.
        </h2>
        <p className="pt-6 text-sm tracking-wide text-center ">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers
        </p>
        <div className="flex flex-col items-center justify-center w-full gap-3 px-3 pt-8 font-Raleway">
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full text-sm border-[1px] border-dBlue px-8 py-3 rounded-md"
          />
          <button className="w-full py-3 text-sm font-bold rounded-md shadow-lg text-gBlue bg-blue">
            Get Started
          </button>
        </div>
      </aside>
    </header>
  );
}
