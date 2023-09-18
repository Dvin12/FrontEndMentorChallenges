import Browser from "./Browser";

const extensions = [
  {
    image: "./assets/images/logo-chrome.svg",
    title: "Chrome",
    version: 62,
  },

  {
    image: "./assets/images/logo-firefox.svg",
    title: "Firefox",
    version: 55,
  },

  {
    image: "./assets/images/logo-opera.svg",
    title: "Opera",
    version: 46,
  },
];

export default function Extension() {
  return (
    <>
      <article className="flex flex-col items-center justify-center px-6 text-center xl:mt-36 text-gBlue">
        <h3 className="text-2xl font-medium xl:text-4xl text-vDarkBlue">
          Download the extension
        </h3>
        <p className="mt-2 xl:text-lg xl:w-[34rem] xl:mt-10">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </article>

      <section className="flex flex-col items-center justify-center gap-6 my-6 xl:flex-row xl:gap-10">
        {extensions.map((browser, i) => (
          <Browser browser={browser} key={i} num={i} />
        ))}
      </section>
    </>
  );
}
