import Item from "./Item";

const grid = [
  {
    name: "DEEP EARTH",
    desktop: "./assets/images/desktop/image-deep-earth.jpg",
    mobile: "./assets/images/mobile/image-deep-earth.jpg",
  },

  {
    name: "NIGHT ARCADE",
    desktop: "./assets/images/desktop/image-night-arcade.jpg",
    mobile: "./assets/images/mobile/image-night-arcade.jpg",
  },

  {
    name: "SOCCER TEAM VR",
    desktop: "./assets/images/desktop/image-soccer-team.jpg",
    mobile: "./assets/images/mobile/image-soccer-team.jpg",
  },

  {
    name: "THE GRID",
    desktop: "./assets/images/desktop/image-grid.jpg",
    mobile: "./assets/images/mobile/image-grid.jpg",
  },

  {
    name: "FROM UP ABOVE VR",
    desktop: "./assets/images/desktop/image-from-above.jpg",
    mobile: "./assets/images/mobile/image-from-above.jpg",
  },

  {
    name: "POCKET BOREALIS",
    desktop: "./assets/images/desktop/image-pocket-borealis.jpg",
    mobile: "./assets/images/mobile/image-pocket-borealis.jpg",
  },

  {
    name: "THE CURIOSITY",
    desktop: "./assets/images/desktop/image-curiosity.jpg",
    mobile: "./assets/images/mobile/image-curiosity.jpg",
  },

  {
    name: "MAKE IT FISHEYE",
    desktop: "./assets/images/desktop/image-fisheye.jpg",
    mobile: "./assets/images/mobile/image-fisheye.jpg",
  },
];

export default function Creations() {
  return (
    <section className="grid grid-cols-1 grid-rows-1  ">
      <section className=" py-12">
        <h3 className=" font-JosefinSans text-3xl text-center tracking-wider ">
          OUR CREATIONS
        </h3>
      </section>

      <section className="grid grid-cols-1 grid-rows-8 gap-6">
        {grid.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </section>
      <div className="flex items-center justify-center my-7">
        <button className=" tracking-[4px] border-black border-[1px] px-10 py-2">
          SEE ALL
        </button>
      </div>
    </section>
  );
}
