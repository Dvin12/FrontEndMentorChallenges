export default function People({ people, setPeople }) {
  return (
    <section className="flex flex-col w-full gap-1">
      <div className="flex justify-between">
        <label className="text-[hsl(186,14%,43%)]">Number of People</label>
        {people === 0 ? (
          <label className="text-red-500">Can't be zero</label>
        ) : (
          ""
        )}
      </div>
      <div className="relative flex items-center justify-between">
        <img
          src="./assets/images/icon-person.svg"
          className="absolute  left-4 text-xl text-[hsl(184,14%,56%)] "
        />

        <input
          type="text"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          placeholder="0"
          className={`bg-[hsl(189,41%,96%)] text-[hsl(183,100%,15%)] p-3 w-full text-end text-xl rounded-md focus:outline-none ${
            people === 0
              ? "border-red-600 border-[2px] "
              : "border-[hsl(186,14%,43%)]  focus:border-[2px] "
          }`}
        />
      </div>
    </section>
  );
}
