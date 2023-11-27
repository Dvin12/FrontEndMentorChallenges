import { Link, useLocation } from "react-router-dom";

export default function NavDesktop() {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <nav className="fixed hidden w-full items-center justify-between bg-transparent md:flex">
      <div className="px-12">
        <img src="./assets/images/shared/logo.svg" alt="" />
      </div>
      <ul className=" flex items-center justify-center gap-8  bg-darkBlue px-8 py-12 font-barlowCondensed text-xl tracking-[0.18em] text-white brightness-[1.20] backdrop-blur">
        <Link to="/">
          <li className="relative flex flex-col items-center justify-between ">
            HOME
            {pathname === "/" && (
              <span className=" absolute -bottom-11 h-[4px] w-full bg-white"></span>
            )}
          </li>
        </Link>
        <Link to="/destination">
          <li className="relative flex flex-col items-center justify-between ">
            DESTINATION
            {pathname === "/destination" && (
              <span className=" absolute -bottom-11 h-[4px] w-full bg-white"></span>
            )}
          </li>
        </Link>
        <Link to="/crew">
          <li className="relative flex flex-col items-center justify-between ">
            CREW
            {pathname === "/crew" && (
              <span className=" absolute -bottom-11 h-[4px] w-full bg-white"></span>
            )}
          </li>
        </Link>
        <Link to="/technology">
          <li className="relative flex flex-col items-center justify-between ">
            TECHNOLOGY
            {pathname === "/technology" && (
              <span className=" absolute -bottom-11 h-[4px] w-full bg-white"></span>
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
}
