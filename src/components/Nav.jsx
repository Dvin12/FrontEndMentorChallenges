import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Nav() {
  const [active, setActive] = useState(false);
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [connect, setConnect] = useState(false);

  function handleActive() {
    return setActive((click) => (click !== true ? true : false));
  }

  function handleProduct() {
    setProduct((click) => (click !== true ? true : false));
  }

  function handleCompany() {
    setCompany((click) => (click !== true ? true : false));
  }

  function handleConnect() {
    setConnect((click) => (click !== true ? true : false));
  }
  return (
    <nav className="absolute flex items-center justify-between w-full px-6 text-lg font-bold text-[hsl(240,7%,95%)] py-14 xl:px-40 xl:py-16 z-80">
      <img
        src="./assets/images/logo.svg"
        alt="logo"
        className="z-50 w-1/4 lg:w-[6rem] md:w-1/6 xl:hidden block"
      />
      <section className="z-50 items-center hidden xl:flex xl:justify-center xl:gap-14 ">
        <img
          src="./assets/images/logo.svg"
          alt="logo"
          className="z-50 w-1/2 lg:w-[6rem]"
        />
        <a
          href="#"
          className={`relative flex items-center justify-center gap-2 transition duration-200 group hover:text-white ${
            product ? "text-white" : ""
          }`}
          onClick={handleProduct}
        >
          Product
          <span
            className={`block h-[2px] transition-all left-0 duration-300 bg-white ${
              product ? "w-[80%]" : "w-0"
            }     absolute bottom-1`}
          ></span>
          {product ? (
            <article className="absolute z-60  w-[9rem] bg-white top-10 text-blueHeadings flex flex-col justify-center px-7 py-4 shadow-lg text-base gap-2 rounded-md">
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                Overview
              </a>
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                Pricing
              </a>
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                Features
              </a>
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                Integrations
              </a>
            </article>
          ) : (
            ""
          )}
          <img
            src="./assets/images/icon-arrow-light.svg"
            alt="arrow"
            className={product ? "rotate-180" : ""}
          />
        </a>
        <a
          href="#"
          className={`relative flex items-center justify-center gap-2 transition duration-200 group hover:text-white ${
            company ? "text-white" : ""
          }`}
          onClick={handleCompany}
        >
          Company
          <span
            className={`block h-[2px] transition-all left-0 duration-300 bg-white ${
              company ? "w-[80%]" : "w-0"
            }     absolute bottom-1`}
          ></span>
          {company ? (
            <article className="absolute z-60  w-[8rem] bg-white top-10 text-blueHeadings flex flex-col justify-center px-6 py-4 shadow-lg text-base gap-2 rounded-md">
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                About
              </a>
              <a
                href="# "
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                Team
              </a>
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                Blog
              </a>
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                Careers
              </a>
            </article>
          ) : (
            ""
          )}
          <img
            src="./assets/images/icon-arrow-light.svg"
            alt="arrow"
            className={company ? "rotate-180" : ""}
          />
        </a>
        <a
          href="#"
          className={`relative flex items-center justify-center gap-2 transition duration-200 group hover:text-white ${
            connect ? "text-white" : ""
          }`}
          onClick={handleConnect}
        >
          Connect
          <span
            className={`block h-[2px] transition-all left-0 duration-300 bg-white ${
              connect ? "w-[80%]" : "w-0"
            }     absolute bottom-1`}
          ></span>
          {connect ? (
            <article className="absolute z-60  w-[8rem] bg-white top-10 text-blueHeadings flex flex-col justify-center px-6 py-4 shadow-lg text-base gap-2 rounded-md">
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                Contact
              </a>
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                Newsletter
              </a>
              <a
                href="#"
                className="duration-200 hover:text-lg hover:text-bodyGrayBlue"
              >
                LinkedIn
              </a>
            </article>
          ) : (
            ""
          )}
          <img
            src="./assets/images/icon-arrow-light.svg"
            alt="arrow"
            className={connect ? "rotate-180" : ""}
          />
        </a>
      </section>
      <section className="items-center justify-center hidden gap-8 xl:flex">
        <a href="#" className="z-40 duration-200 hover:text-white ">
          Login
        </a>
        <button className="z-40 px-10 py-3 font-bold duration-200 bg-white rounded-full font-ubuntu text-navLRed hover:text-white hover:bg-redHoverBg">
          Sign Up
        </button>
      </section>
      <MobileNav
        active={active}
        product={product}
        company={company}
        connect={connect}
        handleActive={handleActive}
        handleProduct={handleProduct}
        handleCompany={handleCompany}
        handleConnect={handleConnect}
      />
    </nav>
  );
}
