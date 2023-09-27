export default function Shortener() {
  return (
    <div className="absolute -top-20  -translate-x-1/2 left-1/2  bg-dViolet  w-[88%] flex flex-col items-center justify-center py-7 gap-4 rounded-xl px-6">
      <input
        type="text"
        className="w-full py-3 rounded-md px-4 tracking-wide"
        placeholder="Shorten a link here..."
      />
      <button className="bg-Gray w-full py-3 rounded-md font-bold text-lg tracking-wide text-[#fff]">
        Shorten it
      </button>
    </div>
  );
}
