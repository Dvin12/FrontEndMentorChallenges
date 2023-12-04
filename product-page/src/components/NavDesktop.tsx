import Cart from "./Cart";
import User from "./User";

export default function NavDesktop({ cart }) {
  return (
    <nav className="hidden xl:flex items-center justify-between  py-7 border-b-[1px] border-dGrayBlue/30 ">
      <section className="flex items-center gap-16 ">
        <img src="./images/logo.svg" alt="" />
        <ul className="flex items-center justify-center gap-8 text-dGrayBlue">
          <li className="relative flex items-center justify-center group   ">
            <a href="#" className="hover:text-black duration-300">
              Collections
            </a>
            <span className=" bg-orange absolute left-0 -bottom-[45px] w-0 group-hover:w-full duration-300 h-[7px]"></span>
          </li>
          <li className="relative flex items-center justify-center group">
            <a href="#" className="hover:text-black duration-300">
              Men
            </a>
            <span className=" bg-orange absolute left-0 -bottom-[45px] w-0 group-hover:w-full duration-300 h-[7px]"></span>
          </li>
          <li className="relative flex items-center justify-center group">
            <a href="#" className="hover:text-black duration-300">
              Women
            </a>
            <span className=" bg-orange absolute left-0 -bottom-[45px] w-0 group-hover:w-full duration-300 h-[7px]"></span>
          </li>
          <li className="relative flex items-center justify-center group">
            <a href="#" className="hover:text-black duration-300">
              About
            </a>
            <span className=" bg-orange absolute left-0 -bottom-[45px] w-0 group-hover:w-full duration-300 h-[7px]"></span>
          </li>
          <li className="relative flex items-center justify-center group">
            <a href="#" className="hover:text-black duration-300">
              Contact
            </a>
            <span className=" bg-orange absolute left-0 -bottom-[45px] w-0 group-hover:w-full duration-300 h-[7px]"></span>
          </li>
        </ul>
      </section>
      <section className="flex items-center justify-center gap-12">
        <Cart cart={cart} />
        <User />
      </section>
    </nav>
  );
}
