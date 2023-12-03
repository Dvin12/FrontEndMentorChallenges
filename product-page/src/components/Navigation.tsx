import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Navigation({ cart }) {
  return (
    <>
      <NavMobile cart={cart} />
      <NavDesktop />
    </>
  );
}
