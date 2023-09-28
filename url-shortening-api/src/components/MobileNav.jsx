import { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import Button from "./Button";
export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <BiMenu size={40} />
      </button>

      <section
        className={`fixed w-[85%] ${
          isOpen ? "-translate-x-1/2 left-1/2" : "  translate-x-[150%]"
        }  top-24 bg-dViolet  p-8 rounded-xl z-30 duration-300 transform`}
      >
        <ul className="flex flex-col items-center justify-center gap-6 text-center text-[#fff] font-bold tracking-wide">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li className="w-full pb-6 border-b border-gViolet">
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li className="w-full">
            <Button width="full">Sign up</Button>
          </li>
        </ul>
      </section>
    </div>
  );
}
