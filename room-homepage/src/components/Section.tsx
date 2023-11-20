export default function Section(): JSX.Element {
  return (
    <section>
      <div>
        <img src="./assets/images/image-about-dark.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-4 px-6 py-14">
        <h2 className=" font-semibold tracking-[0.3em]  ">
          ABOUT OUR FURNITURE
        </h2>
        <p className=" text-darkGrey">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div>
        <img src="./assets/images/image-about-light.jpg" alt="" />
      </div>
    </section>
  );
}
