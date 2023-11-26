import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <button className="px-6 py-16 text-2xl tracking-wider bg-white rounded-full justify-self-end text-darkBlue font-bellefair">
      <Link to="/destination">EXPLORE</Link>
    </button>
  );
}
