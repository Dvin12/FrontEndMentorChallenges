export default function NewsLetter() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 mt-20 bg-sBlue text-[#fff] text-opacity-90 text-center">
      <span className="tracking-[3px] text-sm ">35,000+ ALREADY JOINED</span>
      <h5 className="my-2 text-2xl font-medium">
        Stay up-to-date with what we're doing
      </h5>
      <div className="flex flex-col items-center justify-center w-full gap-4 mt-6">
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full px-4 py-3 rounded-md shadow-md text-vDarkBlue placeholder:opacity-40"
        />
        <button className="w-full py-3 rounded-md shadow-md bg-sRed">
          Contact Us
        </button>
      </div>
    </section>
  );
}
