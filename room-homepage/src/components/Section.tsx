export default function Section(): JSX.Element {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-4 xl:h-full ">
      <div className="w-full h-full">
        <img
          src="./assets/images/image-about-dark.jpg"
          alt="about image 1"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full h-full gap-4 px-6 py-14 xl:px-16 xl:py-24 xl:col-span-2 ">
        <h2 className=" font-semibold tracking-[0.3em] xl:text-2xl w-full h-full  ">
          ABOUT OUR FURNITURE
        </h2>
        <p className="w-full h-full text-darkGrey xl:text-lg">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="w-full h-full">
        <img
          src="./assets/images/image-about-light.jpg"
          alt="about image 2"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
