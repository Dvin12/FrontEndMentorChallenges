export default function Header() {
  return (
    <header className="flex items-center justify-center z-20 relative">
      <img
        src="./assets/images/pattern-circles.svg"
        className="md:w-[140px] w-[180px] z-20 absolute"
        alt=""
      />
      <div className="z-20 py-28 flex flex-col items-center gap-3">
        <h1 className="md:text-4xl text-2xl font-bold text-[hsl(227,35%,25%)]">
          Simple, traffic-based pricing
        </h1>
        <p className="md:text-lg text-center w-[230px] md:w-full text-[hsl(225,20%,60%)]">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
    </header>
  );
}
