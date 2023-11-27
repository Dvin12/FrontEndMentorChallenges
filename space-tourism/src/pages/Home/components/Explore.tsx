import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <button className="px-6 py-16 text-2xl tracking-wider bg-white rounded-full  md:px-9 md:py-24 md:text-4xl justify-self-end text-darkBlue font-bellefair">
      <Link to="/destination">EXPLORE</Link>
    </button>
  );
}
