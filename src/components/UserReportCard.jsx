export default function UserReportCard({
  handleDaily,
  handleWeekly,
  handleMonthly,
  daily,
  weekly,
  monthly,
}) {
  return (
    <aside className="md:row-span-2">
      <div className="bg-[hsl(246,80%,60%)] rounded-xl w-full px-8 py-6 md:py-10 flex md:flex-col md:items-start md:justify-start items-center justify-center relative gap-4 md:gap-0 z-40">
        <img
          src="./public/assets/images/image-jeremy.png"
          alt="Jeremy"
          className="md:w-[100px] w-[80px] border-4 rounded-full"
        />
        <div className="md:my-12 w-full h-full">
          <span className="text-base text-[hsl(236,100%,87%)]  ">
            Report for
          </span>
          <h1 className="md:text-5xl text-2xl font-thin md:mt-2">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="relative top-[-1%] w-full md:h-[28%] z-10">
        <div className="bg-[hsl(235,46%,20%)] h-full w-full px-8 py-6 rounded-b-xl ">
          <ul className="flex md:flex-col gap-4 justify-between md:justify-normal">
            <li
              className={`${
                daily === true ? "text-white" : "text-[hsl(235,45%,61%)]"
              } cursor-pointer hover:text-[hsl(236,100%,87%)] active:text-[hsl(236,100%,87%)] duration-300`}
              onClick={handleDaily}
            >
              Daily
            </li>
            <li
              className={`${
                weekly === true ? "text-white" : "text-[hsl(235,45%,61%)]"
              } cursor-pointer hover:text-[hsl(236,100%,87%)] active:text-[hsl(236,100%,87%)] duration-300`}
              onClick={handleWeekly}
            >
              Weekly
            </li>
            <li
              className={` ${
                monthly === true ? "text-white" : "text-[hsl(235,45%,61%)]"
              } cursor-pointer hover:text-[hsl(236,100%,87%)] active:text-[hsl(236,100%,87%)] duration-300`}
              onClick={handleMonthly}
            >
              Monthly
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
