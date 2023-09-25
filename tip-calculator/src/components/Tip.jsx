export default function Tip({
  setSelectedTip,
  customTip,
  setCustomTip,
  selectedTip,
}) {
  function handleClick(number) {
    setSelectedTip((tip) => (tip !== number ? number : ""));
  }

  return (
    <section>
      <label className="text-[hsl(186,14%,43%)]">Select Tip %</label>
      <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 w-full gap-4 mt-2">
        <button
          onClick={() => handleClick(5)}
          className={`" py-3 rounded-lg  flex items-center justify-center text-2xl hover:bg-[hsl(172,67%,75%)] hover:text-[hsl(183,100%,15%)] duration-200 ${
            selectedTip === 5
              ? "bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)] "
              : "bg-[hsl(183,100%,15%)] text-[hsl(189,41%,97%)]"
          }  `}
        >
          5%
        </button>
        <button
          onClick={() => handleClick(10)}
          className={`" py-3 rounded-lg  flex items-center justify-center text-2xl hover:bg-[hsl(172,67%,75%)] hover:text-[hsl(183,100%,15%)] duration-200 ${
            selectedTip === 10
              ? "bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)] "
              : "bg-[hsl(183,100%,15%)] text-[hsl(189,41%,97%)]"
          }  `}
        >
          10%
        </button>
        <button
          onClick={() => handleClick(15)}
          className={`" py-3 rounded-lg  flex items-center justify-center text-2xl hover:bg-[hsl(172,67%,75%)] hover:text-[hsl(183,100%,15%)] duration-200 ${
            selectedTip === 15
              ? "bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)] "
              : "bg-[hsl(183,100%,15%)] text-[hsl(189,41%,97%)]"
          }  `}
        >
          15%
        </button>
        <button
          onClick={() => handleClick(25)}
          className={`" py-3 rounded-lg  flex items-center justify-center text-2xl hover:bg-[hsl(172,67%,75%)] hover:text-[hsl(183,100%,15%)] duration-200 ${
            selectedTip === 25
              ? "bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)] "
              : "bg-[hsl(183,100%,15%)] text-[hsl(189,41%,97%)]"
          }  `}
        >
          25%
        </button>
        <button
          onClick={() => handleClick(50)}
          className={`" py-3 rounded-lg  flex items-center justify-center text-2xl hover:bg-[hsl(172,67%,75%)] hover:text-[hsl(183,100%,15%)] duration-200 ${
            selectedTip === 50
              ? "bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)] "
              : "bg-[hsl(183,100%,15%)] text-[hsl(189,41%,97%)]"
          }  `}
        >
          50%
        </button>
        <input
          value={customTip}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue === "customTip") {
              setSelectedTip("");
            } else {
              const numValue = Number(inputValue);
              if (!isNaN(numValue) && numValue >= 0 && numValue <= 99) {
                setCustomTip(numValue);
                setSelectedTip(numValue);
              }
            }
          }}
          min="1"
          max="99"
          type="text"
          placeholder="Custom"
          className="text-right px-4 text-2xl bg-[hsl(189,41%,96%)] rounded-lg placeholder:text-[hsl(186,14%,43%)] focus:outline-none focus:border-[2px] border-[hsl(186,14%,43%)] "
        />
      </div>
    </section>
  );
}
