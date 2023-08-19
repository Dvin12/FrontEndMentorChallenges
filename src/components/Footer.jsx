export default function Footer() {
  return (
    <footer className="w-full h-full bg-vLightGray px-6 relative overflow-hidden xl:px-40 ">
      <img
        src="./assets/images/bg-pattern-footer-mobile.svg"
        alt="pattern"
        className="absolute -top-2 left-0 z-10 lg:hidden"
      />

      <img
        src="./assets/images/bg-pattern-footer-desktop.svg"
        alt="pattern"
        className="absolute top-0 h-[16rem] left-0   hidden lg:block"
      />
      <section
        className="flex items-center justify-center 
      flex-col mt-20 gap-8 pb-10 border-b border-b-grayBLue xl:items-start xl:justify-between xl:flex-row xl:z-30 "
      >
        <img src="./assets/images/logo.svg" alt="logo" className="z-30" />
        <div className="flex gap-4 z-20">
          <img
            src="./assets/images/icon-facebook.svg"
            alt="facebook"
            className="cursor-pointer hover:brightness-0 duration-200"
          />
          <img
            src="./assets/images/icon-twitter.svg"
            alt="twitter"
            className="cursor-pointer hover:brightness-0 duration-200"
          />
          <img
            src="./assets/images/icon-pinterest.svg"
            alt="pinterest"
            className="cursor-pointer hover:brightness-0 duration-200"
          />
          <img
            src="./assets/images/icon-instagram.svg"
            alt="instagram"
            className="cursor-pointer hover:brightness-0 duration-200"
          />
        </div>
      </section>
      <section className="py-10 xl:flex xl:justify-between xl:items-start z-30 ">
        <article className="flex flex-col items-center justify-center gap-6 xl:items-start text-center xl:text-left">
          <span className="uppercase text-grayBLue font-bold tracking-widest z-30">
            Our Company
          </span>
          <div className="flex flex-col items-center justify-center gap-2 text-darkViolet font-bold tracking-widest z-30 xl:items-start">
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              HOW WE WORK
            </a>
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute font-normal bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              WHY INSURE?
            </a>
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              CHECK PRICE
            </a>
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              REVIEWS
            </a>
          </div>
        </article>
        <article className="mt-7 flex flex-col items-center justify-center gap-6 xl:mt-0 xl:items-start text-center xl:text-left ">
          <span className="uppercase text-grayBLue font-bold tracking-widest">
            HELP ME
          </span>
          <div className="flex flex-col items-center justify-center  gap-2 text-darkViolet font-bold tracking-widest xl:items-start">
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              FAQ
            </a>
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              TERMS OF USE
            </a>
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              PRIVACY POLICY
            </a>
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              COOKIES
            </a>
          </div>
        </article>
        <article className="flex flex-col items-center justify-center mt-8 gap-6 xl:mt-0 xl:items-start text-center xl:text-left">
          <span className="uppercase text-grayBLue font-bold tracking-widest">
            CONTACT
          </span>
          <div className="flex flex-col items-center justify-center gap-2 text-darkViolet font-bold tracking-widest xl:items-start ">
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              SALES
            </a>
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              SUPPORT
            </a>
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              LIVE CHAT
            </a>
          </div>
        </article>

        <article className=" flex flex-col items-center justify-center mt-8 gap-6 xl:mt-0 xl:items-start text-center xl:text-left">
          <span className="uppercase text-grayBLue font-bold tracking-widest">
            OTHERS
          </span>
          <div className="flex flex-col items-center justify-center gap-2 text-darkViolet font-bold tracking-widest xl:items-start">
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              CAREERS
            </a>
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              PRESS
            </a>
            <a
              href="#"
              className="relative w-full h-full overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transform duration-100 h-[1px] bg-darkViolet"></div>
              LICENSES
            </a>
          </div>
        </article>
      </section>
    </footer>
  );
}
