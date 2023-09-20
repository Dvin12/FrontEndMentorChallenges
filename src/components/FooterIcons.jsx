export default function FooterIcons() {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 my-8 ">
      <div className="flex items-center w-full justify-evenly ">
        <img
          src="./assets/images/icon-facebook.svg"
          alt="button"
          className="w-[1.7rem]"
        />
        <img
          src="./assets/images/icon-youtube.svg"
          alt="button"
          className="w-[1.7rem]"
        />
        <img
          src="./assets/images/icon-twitter.svg"
          alt="button"
          className="w-[1.7rem]"
        />

        <img
          src="./assets/images/icon-pinterest.svg"
          alt="button"
          className="w-[1.7rem]"
        />
        <img
          src="./assets/images/icon-instagram.svg"
          alt="button"
          className="w-[1.7rem]"
        />
      </div>
      <div className="relative">
        <img src="./assets/images/logo.svg" alt="company name" />
        <span className="absolute text-3xl  -top-3 left-[24.6px] tracking-[0.6px] text-veryLightGray ">
          manage
        </span>
      </div>
    </section>
  );
}
