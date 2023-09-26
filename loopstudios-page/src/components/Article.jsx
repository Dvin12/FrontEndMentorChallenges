export default function Article() {
  return (
    <article className="relative grid grid-cols-1 grid-rows-1 xl:w-full ">
      <div className="items-center justify-center md:flex xl:block">
        <img
          src="./assets/images/mobile/image-interactive.jpg"
          alt="man with a VR headset"
          className="block xl:hidden"
        />
        <img
          src="./assets/images/desktop/image-interactive.jpg"
          alt="man with a VR headset"
          className="hidden xl:block xl:w-[65%] "
        />
      </div>
      <div className="flex flex-col items-center justify-center px-3 my-10 text-center xl:w-[50%] xl:absolute xl:right-0 xl:top-[30%] xl:bg-white xl:py-[6%] xl:px-[5%] 2xl:py-[10%] xl:text-left 2xl:text-center 2xl:px-[8%]  ">
        <h2 className="text-3xl tracking-wider font-JosefinSans xl:text-5xl ">
          THE LEADER IN INTERACTIVE VR
        </h2>
        <p className="py-4 text-vDarkGray xl:py-6 2xl:text-lg 2xl:py-12 2xl:leading-relaxed ">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </article>
  );
}
