import Cart from "./Cart";
import User from "./User";

export default function NavDesktop({ cart, setCart }) {
  return (
    <nav className="hidden items-center justify-between border-b-[1px]  border-dGrayBlue/30 py-7 xl:flex ">
      <section className="flex items-center gap-16 ">
        <img src="./images/logo.svg" alt="" />
        <ul className="flex items-center justify-center gap-8 text-dGrayBlue">
          <li className="group relative flex items-center justify-center   ">
            <a href="#" className="duration-300 hover:text-black">
              Collections
            </a>
            <span className=" absolute -bottom-[45px] left-0 h-[7px] w-0 bg-orange duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative flex items-center justify-center">
            <a href="#" className="duration-300 hover:text-black">
              Men
            </a>
            <span className=" absolute -bottom-[45px] left-0 h-[7px] w-0 bg-orange duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative flex items-center justify-center">
            <a href="#" className="duration-300 hover:text-black">
              Women
            </a>
            <span className=" absolute -bottom-[45px] left-0 h-[7px] w-0 bg-orange duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative flex items-center justify-center">
            <a href="#" className="duration-300 hover:text-black">
              About
            </a>
            <span className=" absolute -bottom-[45px] left-0 h-[7px] w-0 bg-orange duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative flex items-center justify-center">
            <a href="#" className="duration-300 hover:text-black">
              Contact
            </a>
            <span className=" absolute -bottom-[45px] left-0 h-[7px] w-0 bg-orange duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </section>
      <section className="flex items-center justify-center gap-12">
        <Cart cart={cart} setCart={setCart} />
        <User />
      </section>
    </nav>
  );
}
