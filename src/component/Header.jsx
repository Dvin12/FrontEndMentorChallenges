import Button from "./Button";

export default function Header({ isMobile }) {
  return (
    <section className="w-full h-fot my-8">
      <div className="md:grid md:grid-cols-2 flex flex-col gap-6  ">
        <article className="flex flex-col justify-between md:mx-36 w-full order-last lg:order-first lg:h-full">
          <div className="h-full w-full flex flex-col md:justify-center items-center md:items-start md:gap-14 gap-6 ">
            <div className="md:text-7xl text-xl font-bold w-full flex  justify-center gap-3 md:flex-col mt-4 text-center md:text-start">
              <h2>Make</h2>
              <h3>remote work</h3>
            </div>
            <p className="md:w-[460px] text-center md:text-start  md:text-lg">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>

            <Button
              backgroundColour="bg-[hsl(0,0%,8%)]"
              text="text-white font-bold"
              border="border-[1px] border-black"
              hover="hover:bg-white hover:text-black  "
              px="px-8"
              py="py-4"
            >
              Learn more
            </Button>
          </div>
          <div className="flex w-full items-center justify-center my-20 md:gap-10 md:justify-start md:my-0 ">
            <img src="./assets/images/client-databiz.svg" alt="" />
            <img src="./assets/images/client-audiophile.svg" alt="" />
            <img src="./assets/images/client-meet.svg" alt="" />
            <img src="./assets/images/client-maker.svg" alt="" />
          </div>
        </article>

        <aside className="flex items-center  justify-center w-full">
          <img
            src={`./assets/images/${
              isMobile === true
                ? "image-hero-mobile.png"
                : "image-hero-desktop.png"
            }`}
            alt="hero image"
            className="xl:w-[540px] lg:w-[480px]"
          />
        </aside>
      </div>
    </section>
  );
}
