export default function Gallery() {
  return (
    <section className="flex flex-col items-center justify-center mt-8 w-fit h-fit xl:flex-row xl:justify-evenly xl:items-start xl:gap-60 ">
      <div className="flex items-center justify-center w-1/2 xl:w-[30%] xl:items-start    ">
        <img
          src="./assets/images/mobile/image-gallery-milkbottles.jpg"
          alt="milkbottles"
          className="block xl:hidden "
        />

        <img
          src="./assets/images/desktop/image-gallery-milkbottles.jpg"
          alt="milkbottles"
          className="hidden xl:block "
        />

        <img
          src="./assets/images/mobile/image-gallery-orange.jpg"
          alt="milkbottles"
          className="block xl:hidden"
        />

        <img
          src="./assets/images/desktop/image-gallery-orange.jpg"
          alt="milkbottles"
          className="hidden xl:block"
        />
      </div>
      <div className="flex items-center justify-center w-1/2 xl:w-[30%] xl:items-start ">
        <img
          src="./assets/images/mobile/image-gallery-cone.jpg"
          alt="milkbottles"
          className="block xl:hidden"
        />

        <img
          src="./assets/images/desktop/image-gallery-cone.jpg"
          alt="milkbottles"
          className="hidden xl:block"
        />
        <img
          src="./assets/images/mobile/image-gallery-sugar-cubes.jpg"
          alt="milkbottles"
          className="block xl:hidden"
        />

        <img
          src="./assets/images/desktop/image-gallery-sugarcubes.jpg"
          alt="milkbottles"
          className="hidden xl:block"
        />
      </div>
    </section>
  );
}
