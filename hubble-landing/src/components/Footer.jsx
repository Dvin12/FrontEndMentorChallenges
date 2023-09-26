import { useState } from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
    setError(false);
    setSucess(false);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setValidEmail(emailRegex.test(e.target.value));
  }

  function handleClick() {
    if (!email.includes("@") || !validEmail) {
      setError(true);
    } else {
      setSucess(true);
    }
  }

  return (
    <footer className="w-full h-full mt-24 text-blue font-OpenSans relative xl:mt-44 ">
      <img
        src="./assets/images/bg-footer-top-mobile.svg"
        alt="background"
        className=" w-full z-10 absolute -top-10 md:-top-24 xl:hidden  "
      />

      <img
        src="./assets/images/bg-footer-top-desktop.svg"
        alt="background"
        className=" w-full z-10  hidden xl:block"
      />

      <section className="bg-cyan px-6 py-12 flex flex-col gap-24 w-full z-30 xl:flex-row xl:px-24 xl:justify-between xl:items-start xl:gap-40">
        <article className="z-30 xl:order-1 w-full relative">
          <h4 className="font-bold tracking-wide text-lg ">NEWSLETTER</h4>
          <p className="text-sm tracking-wide my-4 xl:w-[25rem]">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We'll never send you spam or pass on your email address
          </p>
          <input
            type="text"
            className="py-3 rounded-md w-full my-6 xl:hidden outline-none text-cyan px-4"
            onChange={handleEmail}
          />

          {error && (
            <p className="absolute top-[13.4rem] text-sm text-lRed  xl:hidden">
              Check your email please
            </p>
          )}
          {sucess && (
            <p className="absolute top-[13.4rem] text-sm text-pink  xl:hidden">
              You have subscribed!
            </p>
          )}
          <div className="flex items-end justify-end xl:items-center xl:justify-start xl:gap-10 relative ">
            <button
              className="bg-pink px-10 py-3 rounded-md font-semibold tracking-wider xl:order-2 hover:bg-lPink duration-300"
              onClick={handleClick}
            >
              Subscribe
            </button>
            <input
              type="text"
              className="py-3 rounded-md w-full my-4 xl:block hidden xl:w-2/4 outline-none text-cyan px-4"
              onChange={handleEmail}
            />
            {error && (
              <p className="absolute top-[4.4rem] text-sm text-lRed hidden xl:block">
                Check your email please
              </p>
            )}
            {sucess && (
              <p className="absolute top-[4.4rem] text-sm text-pink hidden xl:block">
                You have subscribed!
              </p>
            )}
          </div>
        </article>

        <article className="w-full">
          <img
            src="./assets/images/logo.svg"
            alt="logo"
            className="invert  hue-rotate-[100deg] brightness-[20%]"
          />
          <p className="text-sm tracking-wide py-4 xl:w-[20rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quam
            molestias cum laboriosam totam officia.
          </p>
          <div className="flex flex-col gap-4 py-8 xl:py-6">
            <div className="flex items-center gap-4">
              <img src="./assets/images/icon-phone.svg" alt="" />
              <span>Phone: +1-543-123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="./assets/images/icon-email.svg" alt="" />
              <span>example@company.com</span>
            </div>
          </div>
          <div className="flex gap-3 xl:py-6">
            <a href="#" className="hover:text-[#4267B2] duration-300">
              <AiFillFacebook size={30} />
            </a>
            <a href="#" className="hover:text-pink duration-300">
              <AiOutlineInstagram size={30} />
            </a>
            <a href="#" className="hover:text-[#1D9BF0] duration-300">
              <AiFillTwitterSquare size={30} />
            </a>
          </div>
        </article>
      </section>
    </footer>
  );
}
