export default function Features() {
  return (
    <section className="lg:absolute top-12 left-20 lg:bg-white px-8 py-6 rounded-xl drop-shadow-xl">
      <ul className="flex flex-col items-start gap-3 w-full text-[hsl(0,0%,41%)] ">
        <li className="flex items-center gap-[14px] cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300">
          <img src="./assets/images/icon-todo.svg" alt="" />
          <span className="flex">Todo List</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300">
          <img src="./assets/images/icon-calendar.svg" alt="" />
          <span className="text-left">Calendar</span>
        </li>
        <li className="flex items-center  gap-[15px] cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300">
          <img src="./assets/images/icon-reminders.svg" alt="" />
          <span className=" ">Reminders</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300">
          <img src="./assets/images/icon-planning.svg" alt="" />
          <span className="">Planning</span>
        </li>
      </ul>
    </section>
  );
}
