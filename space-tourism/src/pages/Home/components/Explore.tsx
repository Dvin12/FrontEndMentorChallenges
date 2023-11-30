import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <Link to="/destination">
      <button className=" group relative  z-20 h-40 w-40 rounded-full  bg-white   font-bellefair text-xl tracking-widest text-darkBlue md:h-60 md:w-60 md:text-3xl xl:mt-56">
        <span className="relative z-30">EXPLORE</span>
        <span className=" absolute left-1/2  top-1/2 z-10   hidden h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 items-center  justify-center rounded-full bg-white opacity-0 duration-300 group-hover:opacity-30  xl:flex "></span>
      </button>
    </Link>
  );
}
