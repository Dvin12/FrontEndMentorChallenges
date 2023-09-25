export default function Total({ totalAmount }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-[hsl(189,41%,97%)]">Total</span>
        <span className="text-[hsl(184,14%,56%)]">/ person</span>
      </div>
      <span className="text-5xl text-[hsl(172,67%,45%)]">
        ${totalAmount.toFixed(2)}
      </span>
    </div>
  );
}
