export default function NavLinks() {
  return (
    <ul className="flex items-center gap-14 justify-center text-xl">
      <li className="cursor-pointer hover:text-[hsl(5,85%,63%)] duration-300 transition-all">
        Home
      </li>
      <li className="cursor-pointer hover:text-[hsl(5,85%,63%)] duration-300 transition-all">
        New
      </li>
      <li className="cursor-pointer hover:text-[hsl(5,85%,63%)] duration-300 transition-all">
        Popular
      </li>
      <li className="cursor-pointer hover:text-[hsl(5,85%,63%)] duration-300 transition-all">
        Trending
      </li>
      <li className="cursor-pointer hover:text-[hsl(5,85%,63%)] duration-300 transition-all">
        Categories
      </li>
    </ul>
  );
}
