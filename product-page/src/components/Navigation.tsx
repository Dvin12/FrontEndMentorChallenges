import { CartProp } from "./Interfaces";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Navigation({ cart, setCart }: CartProp) {
  return (
    <>
      <NavMobile cart={cart} setCart={setCart} />
      <NavDesktop cart={cart} setCart={setCart} />
    </>
  );
}
