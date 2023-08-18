export default function Header() {
  return (
    <header className="w-full h-full flex flex-col text-vLightGray relative  ">
      <img
        src="./assets/images/image-intro-mobile.jpg"
        alt=""
        className="w-full "
      />
      <section className="flex flex-col items-center justify-center h-full w-full bg-darkViolet gap-4 py-24 px-4 relative ">
        <img
          src="./assets/images/bg-pattern-intro-left-mobile.svg"
          alt=""
          className="absolute top-0 left-0 z-0"
        />
        <h1 className="text-5xl text-center font-dmSerifDisplay z-10">
          Humanizing your insurance.
        </h1>
        <p className="text-center px-2 leading-relaxed tracking-wider ">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="border-2 px-8 py-2 mt-3 uppercase tracking-widest ">
          View Plans
        </button>
      </section>
      {/* <img
        src="./assets/images/bg-pattern-how-we-work-mobile.svg"
        alt=""
        className="absolute bottom-0 right-0"
      /> */}
    </header>
  );
}
