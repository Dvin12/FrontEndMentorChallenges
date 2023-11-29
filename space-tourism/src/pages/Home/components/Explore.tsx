import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <Link to="/destination">
      <button className="h-40 w-40 rounded-full bg-white  font-bellefair   text-xl tracking-widest text-darkBlue md:h-60 md:w-60 md:text-3xl xl:mt-56">
        EXPLORE
      </button>
    </Link>
  );
}
