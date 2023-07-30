export default function Block({ block }) {
  const blockHeight = block.amount;
  return (
    <li className="relative w-full h-full flex flex-col justify-end items-center gap-2 group">
      <span className="text-[hsl(28,10%,53%)]">{block.day}</span>
      <div
        className={`bg-[hsl(10,79%,65%)] group-hover:bg-[hsl(10,79%,75%)] cursor-pointer duration-300 md:w-[55px] w-[50px] mx-1 md:mx-0 relative ${
          blockHeight <= 20
            ? "h-[50px]"
            : blockHeight <= 30
            ? "h-[70px]"
            : blockHeight <= 40
            ? "h-[100px]"
            : blockHeight <= 50
            ? "h-[120px]"
            : "h-[140px] bg-[hsl(186,34%,60%)] group-hover:bg-[hsl(186,34%,75%)]"
        } order-first md:rounded-lg rounded `}
      >
        <div className="flex opacity-0 group-hover:opacity-100 absolute top-[-50px] left-0 right-0 items-center justify-center order-first bg-black text-white py-2   rounded-md duration-200 ">
          ${block.amount}
        </div>
      </div>
    </li>
  );
}
