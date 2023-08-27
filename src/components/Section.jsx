import Article from "./Article";

export default function Section() {
  return (
    <section>
      <article className="relative items-center justify-center w-full xl:flex ">
        <img
          src="./assets/images/mobile/image-transform.jpg"
          alt="transform"
          className="block xl:hidden"
        />
        <img
          src="./assets/images/desktop/image-transform.jpg"
          alt="egg"
          className="order-last hidden w-full xl:block 2xl:w-[150%] "
        />
        <section className="flex flex-col items-center justify-between w-full h-full gap-6 px-6 py-16 bg-grayBlue brightness-150 2xl:px-60 xl:px-32 xl:items-start ">
          <h2 className="text-4xl font-extrabold text-center font-fraunces text-vDBlue xl:text-start xl:w-[25rem] ">
            Transform your brand
          </h2>
          <p className="text-lg leading-relaxed text-center text-vDGrayBlue xl:text-left">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients throught compelling visuals that do
            most of the marketing for you.
          </p>

          <button className="relative z-30 flex pt-2 font-extrabold group font-fraunces text-vDBlue">
            <span className="z-40 flex">LEARN MORE</span>
            <div className=" group absolute z-0 w-full h-2 rounded-full bottom-16 bg-yellow bg-opacity-40 group-hover:bg-opacity-80 xl:w-[8rem] top-6  duration-300 "></div>
          </button>
        </section>
      </article>

      <article className="relative items-center justify-center w-full xl:flex">
        <img
          src="./assets/images/mobile/image-stand-out.jpg"
          alt="cup"
          className="block xl:hidden"
        />
        <img
          src="./assets/images/desktop/image-stand-out.jpg"
          alt="cup"
          className="hidden w-full xl:block 2xl:w-[150%] "
        />
        <section className="flex flex-col items-center justify-between w-full h-full gap-6 px-6 py-16 bg-grayBlue brightness-150 2xl:px-60 xl:px-32 xl:items-start ">
          <h2 className="text-4xl font-extrabold text-center font-fraunces text-vDBlue xl:text-start ">
            Stand out to the right audience
          </h2>
          <p className="text-lg leading-relaxed text-center text-vDGrayBlue xl:text-left ">
            Using a collaborative formula of designers, researchers,
            photographers, videographers and copywriters, we'll build and extend
            your brand in digital places.
          </p>

          <button className="relative z-30 flex pt-2 font-extrabold group font-fraunces text-vDBlue">
            <span className="z-40 flex">LEARN MORE</span>
            <div className=" group absolute z-0 w-full h-2 rounded-full bottom-16 bg-softRed bg-opacity-40 group-hover:bg-opacity-80 xl:w-[8rem] top-6  duration-300 "></div>
          </button>
        </section>
      </article>

      <section className="items-center justify-between block w-full xl:flex">
        <article className="relative 2xl:w-[50%] ">
          <img
            src="./assets/images/mobile/image-graphic-design.jpg"
            alt="cherry "
            className="block xl:hidden"
          />
          <img
            src="./assets/images/desktop/image-graphic-design.jpg"
            alt="cherry "
            className="hidden w-full xl:block "
          />
          <section className="absolute flex flex-col items-center justify-between gap-6 px-4 bottom-14 xl:bottom-16 ">
            <h2 className="text-3xl font-extrabold text-center font-fraunces text-dCyan">
              Graphic Design
            </h2>
            <p className="text-base leading-relaxed text-center text-dCyan xl:px-40 2xl:w-[80%]">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients
              attention.
            </p>
          </section>
        </article>

        <article className="relative 2xl:w-[50%] xl:flex items-center justify-center ">
          <img
            src="./assets/images/mobile/image-photography.jpg"
            alt="orange"
            className="block xl:hidden"
          />
          <img
            src="./assets/images/desktop/image-photography.jpg"
            alt="orange"
            className="hidden w-full xl:block"
          />
          <section className="absolute flex flex-col items-center justify-between gap-6 px-4 bottom-14 xl:bottom-16 ">
            <h2 className="text-3xl font-extrabold text-center font-fraunces text-dBlue">
              Photography
            </h2>
            <p className="text-base leading-relaxed text-center text-dBlue xl:px-40 2xl:w-[70%]">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </section>
        </article>
      </section>
    </section>
  );
}
