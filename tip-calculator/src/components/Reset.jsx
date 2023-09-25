export default function Reset({ handleReset, bill, people }) {
  return (
    <button
      disabled={bill === "" && people === ""}
      className="bg-[hsl(172,67%,45%)] py-3 rounded-lg text-xl text-[hsl(183,100%,15%)] hover:bg-[hsl(185,41%,84%)] duration-200 disabled:bg-[hsl(183,100%,25%)] disabled:cursor-not-allowed"
      onClick={handleReset}
    >
      RESET
    </button>
  );
}
