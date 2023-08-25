export default function NewsLetter() {
  return (
    <section className="absolute  bg-introEmail flex flex-col justify-center items-center text-cyan px-5 py-10 rounded-md drop-shadow-lg -bottom-[30rem] z-30 left-0 mx-6 ">
      <h4 className="text-lg font-bold tracking-wider font-raleway">
        Get early access today
      </h4>
      <p className="py-6 text-sm text-center">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex flex-col items-center justify-center w-full gap-5">
        <input type="text" className="w-full py-3 rounded-full shadow-xl" />
        <button className="w-full py-4 font-extrabold rounded-full bg-gradient-to-r from-cyan from-0% to-blue to-70% font-raleway text-sm tracking-wide text-[#fff] shadow-xl">
          Get Started For Free
        </button>
      </div>
    </section>
  );
}
