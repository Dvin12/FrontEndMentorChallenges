import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <button className="justify-self-end rounded-full bg-white px-6 py-16 font-bellefair  text-2xl tracking-wider text-darkBlue md:px-9 md:py-24 md:text-4xl xl:mt-56">
      <Link to="/destination">EXPLORE</Link>
    </button>
  );
}
