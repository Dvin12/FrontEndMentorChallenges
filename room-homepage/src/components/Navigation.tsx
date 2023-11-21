import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Navigation(): JSX.Element {
  return (
    <>
      <NavMobile />
      <NavDesktop />
    </>
  );
}
