export default function Footer() {
  return (
    <footer className="w-full py-10 bg-vDarkBlue text-[#FFF] text-opacity-90 tracking-widest xl:flex xl:items-center xl:justify-between xl:px-44 ">
      <section className="flex flex-col items-center justify-center gap-6 xl:flex-row xl:gap-10 ">
        <div className="relative mb-3 xl:mb-0">
          <img src="./assets/images/logo-bookmark.svg" alt="company name" />
          <span className="   z-30 absolute top-0.5 left-9 font-medium tracking-wider  ">
            BOOKMARK
          </span>
        </div>
        <a href="#" className="duration-300 hover:text-sRed">
          FEATURES
        </a>
        <a href="#" className="duration-300 hover:text-sRed">
          PRICING
        </a>
        <a href="#" className="duration-300 hover:text-sRed">
          CONTACT
        </a>
      </section>

      <section className="flex items-center justify-center gap-10 mt-10 xl:mt-0 ">
        <img
          src="./assets/images/icon-facebook.svg"
          alt="facebook"
          className=" hover:invert-[30%] hover:sepia-[70%] hover:brightness-[60%] hover:hue-rotate-[300deg] hover:contrast-[67%] duration-200 cursor-pointer"
        />
        <img
          src="./assets/images/icon-twitter.svg"
          alt="twitter"
          className=" hover:invert-[30%] hover:sepia-[70%] hover:brightness-[60%] hover:hue-rotate-[300deg] hover:contrast-[67%] duration-200 cursor-pointer"
        />
      </section>
    </footer>
  );
}
