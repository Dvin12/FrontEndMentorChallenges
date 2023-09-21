export default function FooterIcons() {
  return (
    <div className="w-full xl:order-first">
      <section className="flex flex-col items-center justify-center w-full h-full gap-8 my-8 xl:px-44 xl:my-0 xl:justify-end xl:items-start ">
        <div className="flex items-center w-full justify-evenly xl:order-last xl:justify-start xl:mt-8 xl:gap-3 ">
          <img
            src="./assets/images/icon-facebook.svg"
            alt="button"
            className="w-[1.7rem] cursor-pointer hover:invert-[50%] hover:sepia-[120%] hover:saturate-[4413%]  hover:hue-rotate-180  hover:brightness-[120%] hover:contrast-[2%] duration-200    "
          />
          <img
            src="./assets/images/icon-youtube.svg"
            alt="button"
            className="w-[1.7rem] cursor-pointer hover:invert-[50%] hover:sepia-[120%] hover:saturate-[4413%]  hover:hue-rotate-180  hover:brightness-[120%] hover:contrast-[2%] duration-200    "
          />
          <img
            src="./assets/images/icon-twitter.svg"
            alt="button"
            className="w-[1.7rem] cursor-pointer hover:invert-[50%] hover:sepia-[120%] hover:saturate-[4413%]  hover:hue-rotate-180  hover:brightness-[120%] hover:contrast-[2%] duration-200    "
          />

          <img
            src="./assets/images/icon-pinterest.svg"
            alt="button"
            className="w-[1.7rem] cursor-pointer hover:invert-[50%] hover:sepia-[120%] hover:saturate-[4413%]  hover:hue-rotate-180  hover:brightness-[120%] hover:contrast-[2%] duration-200    "
          />
          <img
            src="./assets/images/icon-instagram.svg"
            alt="button"
            className="w-[1.7rem] cursor-pointer hover:invert-[50%] hover:sepia-[120%] hover:saturate-[4413%]  hover:hue-rotate-180  hover:brightness-[120%] hover:contrast-[2%] duration-200    "
          />
        </div>
        <div className="relative xl:w-[65%] ">
          <img
            src="./assets/images/logo.svg"
            alt="company name"
            className="xl:w-full"
          />
          <span className="absolute xl:text-4xl  -top-3 xl:left-[32px] text-3xl left-[24px] tracking-[1px]  xl:tracking-[2px] text-veryLightGray ">
            manage
          </span>
        </div>
      </section>
    </div>
  );
}
