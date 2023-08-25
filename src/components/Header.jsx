export default function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center w-full h-full px-6 py-5 xl:px-16 text-cyan bg-introEmail xl:pb-56 ">
      <img
        src="./assets/images/illustration-intro.png"
        alt="illustration"
        className="z-30"
      />
      <h1 className="z-30 my-5 text-2xl font-extrabold leading-normal text-center font-raleway xl:text-4xl xl:w-[45rem] xl:tracking-wider xl:my-7 xl:leading-relaxed text-[#fff]">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="z-30 px-4 text-sm text-center xl:text-xl xl:w-[40rem] xl:leading-relaxed">
        Fylo stores all your most important files in one secure location. Access
        them whenever you need, share and collaborate with friends, family and
        co-workers.
      </p>
      <button className="px-20 py-4 font-bold rounded-full my-7 bg-gradient-to-r  from-cyan to-blue to-60%  text-[#fff] text-sm font-raleway z-30 shadow-xl xl:px-28 xl:py-5 xl:text-lg hover:brightness-110 duration-200 ">
        Get Started
      </button>
      <div className="absolute flex flex-col items-center justify-center w-full h-full top-28 xl:hidden ">
        <img
          src="./assets/images/bg-curvy-mobile.svg"
          alt="background"
          className="z-0 block w-full xl:hidden "
        />

        <div className="w-full bg-background  h-[42%] "></div>
      </div>
      <div className="absolute flex-col items-center justify-center hidden w-full h-full top-[24rem] xl:flex 2xl:top-[21rem] ">
        <img
          src="./assets/images/bg-curvy-desktop.svg"
          alt="background"
          className="z-0 block w-full "
        />
      </div>
    </header>
  );
}
