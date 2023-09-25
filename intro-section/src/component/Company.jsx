export default function Company() {
  return (
    <section className="lg:absolute lg:bg-white p-8 rounded-xl drop-shadow-xl top-11 left-64 ">
      <ul className="flex flex-col gap-3 text-[hsl(0,0%,41%)]">
        <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300">
          History
        </li>
        <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300">
          Our Team
        </li>
        <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300">
          Blog
        </li>
      </ul>
    </section>
  );
}
