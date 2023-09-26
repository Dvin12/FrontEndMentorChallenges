export default function Clipboard() {
  return (
    <article className="flex flex-col items-center justify-center w-full text-center my-28 xl:my-36">
      <h3 className="w-full text-3xl font-bold text-dBlue xl:text-5xl ">
        Access Clipboard Anywhere
      </h3>
      <p className="my-8 xl:w-[46rem] xl:text-lg">
        Whether you're on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
      <img
        src="./assets/images/image-devices.png"
        alt="phone and a tablet"
        className="xl:w-[60%] w-fit"
      />
    </article>
  );
}
