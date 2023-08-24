export default function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center w-full h-full px-6 py-5 text-cyan">
      <img src="./assets/images/illustration-intro.png" alt="illustration" />
      <h1 className="my-5 text-2xl font-extrabold leading-normal text-center font-raleway">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="px-4 text-sm text-center">
        Fylo stores all your most important files in one secure location. Access
        them whenever you need, share and collaborate with friends, family and
        co-workers.
      </p>
      <button className="px-20 py-4 font-bold rounded-full my-7 bg-gradient-to-r  from-cyan to-blue to-60%  text-[#fff] text-sm font-raleway ">
        Get Started
      </button>
    </header>
  );
}
