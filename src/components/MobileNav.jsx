export default function MobileNav({ handleClick }) {
  return (
    <>
      <div className="fixed bg-gray-800 opacity-60 top-0 left-0 w-screen h-full"></div>
      <div className="fixed top-0 right-0 bg-white h-full w-[280px] z-20">
        <span
          className="flex items-end justify-end px-6 py-8 cursor-pointer"
          onClick={(e) => handleClick(e)}
        >
          <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
            <g fill="#00001A" fillRule="evenodd">
              <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
              <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
            </g>
          </svg>
        </span>
        <ul className="p-6 text-xl flex flex-col gap-6">
          <li className="cursor-pointer hover:text-[hsl(5,85%,63%)] duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-[hsl(5,85%,63%)] duration-300">
            New
          </li>
          <li className="cursor-pointer hover:text-[hsl(5,85%,63%)] duration-300">
            Popular
          </li>
          <li className="cursor-pointer hover:text-[hsl(5,85%,63%)] duration-300">
            Trending
          </li>
          <li className="cursor-pointer hover:text-[hsl(5,85%,63%)] duration-300">
            Categories
          </li>
        </ul>
      </div>
    </>
  );
}
