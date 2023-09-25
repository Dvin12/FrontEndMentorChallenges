export default function TipAmount({ tipAmount }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-[hsl(189,41%,97%)]">Tip Amount</span>
        <span className="text-[hsl(184,14%,56%)]">/ person</span>
      </div>
      <span className="text-5xl text-[hsl(172,67%,45%)]">
        ${tipAmount.toFixed(2)}
      </span>
    </div>
  );
}
