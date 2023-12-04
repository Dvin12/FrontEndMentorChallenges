import { useState } from "react";

export default function ImageDesktop({ images, thumbnails }) {
  const [selectedSlide, setSelectedSlide] = useState(0);

  function handleSlideSelection(index) {
    setSelectedSlide(index);
  }

  return (
    <section className="hidden xl:flex flex-col items-center justify-center  ">
      <div>
        <img
          src={images[0].image}
          alt=""
          className=" rounded-2xl w-[480px] cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-6 my-10">
        {thumbnails.map((thumbnail, i) => (
          <div
            key={i}
            className={`border-[3px] rounded-xl  ${
              selectedSlide === i
                ? "border-orange border-opacity-100 duration-200"
                : " border-transparent cursor-pointer"
            }`}
          >
            <img
              src={thumbnail.thumbnail}
              className={`w-[100px] rounded-lg ${
                selectedSlide === i
                  ? " opacity-40"
                  : " hover:opacity-40 duration-300"
              } `}
              onClick={() => handleSlideSelection(i)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
