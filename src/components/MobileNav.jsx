export default function MobileNav({
  active,
  product,
  company,
  connect,
  handleActive,
  handleProduct,
  handleCompany,
  handleConnect,
}) {
  return (
    <>
      <button className="z-30 block lg:hidden" onClick={handleActive}>
        <img
          src={`./assets/images/${
            active ? "icon-close.svg" : "icon-hamburger.svg"
          }`}
          alt="menu"
        />
      </button>
      {active ? (
        <aside className="absolute  left-0  right-0 z-50 flex flex-col items-center justify-center h-fit gap-4 mx-auto bg-white top-[80%] w-[85%] text-blueHeadings px-8 py-8 rounded-md shadow-lg">
          <section className="flex flex-col items-center justify-center w-full">
            <a
              href="#"
              className="flex items-center justify-center gap-4"
              onClick={handleProduct}
            >
              Product
              <img
                src="./assets/images/icon-arrow-dark.svg"
                alt="arror"
                className={`${product ? "rotate-180" : ""}`}
              />
            </a>
            {product ? (
              <article className="flex flex-col items-center justify-center w-full gap-4 py-4 my-4 text-base transition-all rounded-md bg-opacity-10 bg-blueBody text-blueHeadings">
                <a href="#">Overview</a>
                <a href="#">Pricing</a>
                <a href="#">Marketplace</a>
                <a href="#">Features</a>
                <a href="#">Integrations</a>
              </article>
            ) : (
              ""
            )}
          </section>

          <section className="w-full">
            <a
              href="#"
              className="flex items-center justify-center gap-4"
              onClick={handleCompany}
            >
              Company
              <img
                src="./assets/images/icon-arrow-dark.svg"
                alt=""
                className={company ? "rotate-180" : ""}
              />
            </a>
            {company ? (
              <article className="flex flex-col items-center justify-center w-full gap-4 py-4 my-4 text-base transition-all rounded-md bg-opacity-10 bg-blueBody text-blueHeadings">
                <a href="#">About</a>
                <a href="#">Team</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
              </article>
            ) : (
              ""
            )}
          </section>

          <section className="w-full border-b-[1px] border-blueFooterTxt pb-2">
            <a
              href="#"
              className="flex items-center justify-center gap-4"
              onClick={handleConnect}
            >
              Connect
              <img
                src="./assets/images/icon-arrow-dark.svg"
                alt=""
                className={connect ? "rotate-180" : ""}
              />
            </a>
            {connect ? (
              <article className="flex flex-col items-center justify-center w-full gap-4 py-4 my-4 text-base transition-all rounded-md bg-opacity-10 bg-blueBody text-blueHeadings">
                <a href="#">Contact</a>
                <a href="#">Newsletter</a>
                <a href="#">LinkedIn</a>
              </article>
            ) : (
              ""
            )}
          </section>
          <section className="flex flex-col items-center justify-center w-full h-full gap-4">
            <a href="#">Login</a>
            <button className="px-10 py-3 text-white rounded-full bg-gradient-to-r from-navVlRed to-navLRed">
              Sign Up
            </button>
          </section>
        </aside>
      ) : (
        ""
      )}
    </>
  );
}
