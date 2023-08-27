import Article from "./Article";

export default function Section() {
  return (
    <section>
      <article className="relative">
        <img src="./assets/images/mobile/image-transform.jpg" alt="" />
        <section className="flex flex-col items-center justify-between w-full h-full gap-6 px-6 py-16 bg-grayBlue brightness-150 ">
          <h2 className="text-4xl font-extrabold text-center font-fraunces text-vDBlue ">
            Transform your brand
          </h2>
          <p className="text-lg leading-relaxed text-center text-vDGrayBlue">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients throught compelling visuals that do
            most of the marketing for you.
          </p>

          <div className="absolute z-0 w-2/6 h-2 rounded-full bottom-16 bg-yellow opacity-40 "></div>
          <button className="z-20 flex pt-2 font-extrabold font-fraunces text-vDBlue">
            LEARN MORE
          </button>
        </section>
      </article>

      <article className="relative">
        <img src="./assets/images/mobile/image-stand-out.jpg" alt="" />
        <section className="flex flex-col items-center justify-between w-full h-full gap-6 px-6 py-16 bg-grayBlue brightness-150 ">
          <h2 className="text-4xl font-extrabold text-center font-fraunces text-vDBlue">
            Stand out to the right audience
          </h2>
          <p className="text-lg leading-relaxed text-center text-vDGrayBlue">
            Using a collaborative formula of designers, researchers,
            photographers, videographers and copywriters, we'll build and extend
            your brand in digital places.
          </p>

          <div className="absolute z-0 w-2/6 h-2 rounded-full bottom-16 bg-softRed opacity-60 "></div>
          <button className="z-20 flex pt-2 font-extrabold font-fraunces text-vDBlue">
            LEARN MORE
          </button>
        </section>
      </article>

      <article className="relative">
        <img src="./assets/images/mobile/image-graphic-design.jpg" alt="" />
        <section className="absolute flex flex-col items-center justify-between gap-6 px-4 bottom-14">
          <h2 className="text-3xl font-extrabold text-center font-fraunces text-dCyan">
            Graphic Design
          </h2>
          <p className="text-base leading-relaxed text-center text-dCyan">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients
            attention.
          </p>
        </section>
      </article>

      <article className="relative">
        <img src="./assets/images/mobile/image-photography.jpg" alt="" />
        <section className="absolute flex flex-col items-center justify-between gap-6 px-4 bottom-14">
          <h2 className="text-3xl font-extrabold text-center font-fraunces text-dBlue">
            Photography
          </h2>
          <p className="text-base leading-relaxed text-center text-dBlue">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </section>
      </article>
    </section>
  );
}
