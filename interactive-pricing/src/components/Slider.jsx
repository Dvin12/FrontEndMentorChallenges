export default function Slider({ slider, setSlider }) {
  return (
    <div className="w-full ">
      <input
        type="range"
        className={`w-full  mt-14 bg-gradient-to-r from-[hsl(174,86%,45%)] ${
          slider === 1
            ? "from-[0%]"
            : slider === 2
            ? "from-[25%]"
            : slider === 3
            ? "from-[50%]"
            : slider === 4
            ? "from-[75%]"
            : slider === 5
            ? "from-[100%]"
            : ""
        }
         to-[hsl(224,65%,95%)] to-[0%] h-3 appearance-none rounded-lg outline-none`}
        min="1"
        max="5"
        value={slider}
        onChange={(e) => setSlider(Number(e.target.value))}
      />
    </div>
  );
}
