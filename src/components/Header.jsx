export default function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center w-full h-full px-6 py-5 text-cyan bg-introEmail">
      <img
        src="./assets/images/illustration-intro.png"
        alt="illustration"
        className="z-30"
      />
      <h1 className="z-30 my-5 text-2xl font-extrabold leading-normal text-center font-raleway">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="z-30 px-4 text-sm text-center">
        Fylo stores all your most important files in one secure location. Access
        them whenever you need, share and collaborate with friends, family and
        co-workers.
      </p>
      <button className="px-20 py-4 font-bold rounded-full my-7 bg-gradient-to-r  from-cyan to-blue to-60%  text-[#fff] text-sm font-raleway z-30 shadow-xl ">
        Get Started
      </button>
      <div className="absolute flex flex-col items-center justify-center w-full h-full top-28 ">
        <img
          src="./assets/images/bg-curvy-mobile.svg"
          alt=""
          className="z-0 w-full "
        />
        <div className="w-full bg-background  h-[42%] "></div>
      </div>
    </header>
  );
}
