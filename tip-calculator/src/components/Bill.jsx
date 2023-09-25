export default function Bill({ bill, setBill }) {
  return (
    <section className="flex flex-col w-full gap-1">
      <div className="flex justify-between">
        <label className="text-[hsl(186,14%,43%)] ">Bill</label>
        {bill === 0 ? (
          <label className="text-red-500 ">Can't be zero</label>
        ) : (
          ""
        )}
      </div>
      <div className="relative flex items-center justify-between">
        <img
          src="./assets/images/icon-dollar.svg"
          className="absolute  left-4 text-xl text-[hsl(184,14%,56%)] "
        />

        <input
          value={bill}
          placeholder="0"
          type="text"
          onChange={(e) => setBill(Number(e.target.value))}
          className={`bg-[hsl(189,41%,96%)] focus:outline-none focus:border-[2px] text-[hsl(183,100%,15%)] ${
            bill === 0
              ? "border-red-600 border-[2px] "
              : "focus:border-[hsl(186,14%,43%)]  focus:border-[2px] "
          }  p-3 w-full text-end text-xl rounded-md`}
        />
      </div>
    </section>
  );
}
