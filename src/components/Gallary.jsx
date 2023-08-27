export default function Gallary() {
  return (
    <section className="flex flex-col items-center justify-center mt-8 w-fit h-fit">
      <div className="flex items-center justify-center w-1/2 ">
        <img
          src="./assets/images/mobile/image-gallery-milkbottles.jpg"
          alt="milkbottles"
        />
        <img
          src="./assets/images/mobile/image-gallery-orange.jpg"
          alt="milkbottles"
        />
      </div>
      <div className="flex items-center justify-center w-1/2 ">
        <img
          src="./assets/images/mobile/image-gallery-cone.jpg"
          alt="milkbottles"
        />
        <img
          src="./assets/images/mobile/image-gallery-sugar-cubes.jpg"
          alt="milkbottles"
        />
      </div>
    </section>
  );
}
