export default function Confirmed({
  setSubmit,
  setCardName,
  setCardNumber,
  setCardMonth,
  setCardYear,
  setCardCvc,
}) {
  function handleClick() {
    setSubmit(!true);

    setCardName("");
    setCardNumber("");
    setCardMonth("");
    setCardYear("");
    setCardCvc("");
  }

  return (
    <section className=" col-span-2 grid place-content-center   w-full h-full py-40 md:py-0">
      <article className="flex flex-col items-center">
        <span className="mb-6">
          <svg
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="url(#a)" />
            <path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3" />
            <defs>
              <linearGradient
                id="a"
                x1="-23.014"
                y1="11.507"
                x2="0"
                y2="91.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6348FE" />
                <stop offset="1" stopColor="#610595" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <h2 className="text-3xl tracking-widest my-4">THANK YOU!</h2>
        <p className="text-lg text-[hsl(279,6%,55%)]">
          We've added your card details
        </p>
        <button
          className="bg-[hsl(278,68%,11%)] w-[400px] my-14 p-4 rounded-lg text-white"
          onClick={() => handleClick()}
        >
          Continue
        </button>
      </article>
    </section>
  );
}
