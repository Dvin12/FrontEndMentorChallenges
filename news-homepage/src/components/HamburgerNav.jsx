import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  function handleClick(e) {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }
  return (
    <>
      <HamburgerMenu handleClick={handleClick} />
      {isOpen && <MobileNav handleClick={handleClick} />}
    </>
  );
}
