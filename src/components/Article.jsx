export default function Article() {
  return (
    <article className=" grid grid-cols-1 grid-rows-1 ">
      <div>
        <img src="./assets/images/mobile/image-interactive.jpg" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center my-10 text-center  px-3">
        <h2 className=" font-JosefinSans text-3xl  tracking-wider">
          THE LEADER IN INTERACTIVE VR
        </h2>
        <p className="  text-vDarkGray py-4 ">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </article>
  );
}
