import { useState } from "react";
import Modal from "./Modal";
import { Product } from "./Interfaces";

interface ImagesThumbnails {
  images: Product;
  thumbnails: Product;
}

export default function ImageDesktop({ images, thumbnails }: ImagesThumbnails) {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [isModalActive, setisModalActive] = useState(false);

  function handleSlideSelection(index: number) {
    setSelectedSlide(index);
  }

  function handleModal() {
    setisModalActive((modal) => !modal);
    setSelectedSlide(0);
  }

  return (
    <>
      <section className="hidden xl:flex flex-col items-center justify-center  ">
        <div onClick={handleModal}>
          <img
            src={images[0].image}
            alt=""
            className=" rounded-2xl w-[480px] cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-5 my-10">
          {thumbnails.map((thumbnail, i) => (
            <div
              onClick={handleModal}
              key={i}
              className={`border-[3px] rounded-xl  ${
                0 === i
                  ? "border-orange border-opacity-100 duration-200"
                  : " border-transparent cursor-pointer"
              }`}
            >
              <img
                src={thumbnail.thumbnail}
                className={`w-[100px] rounded-lg ${
                  0 === i ? " opacity-40" : " hover:opacity-40 duration-300"
                } `}
              />
            </div>
          ))}
        </div>
      </section>
      {isModalActive && (
        <Modal
          images={images}
          thumbnails={thumbnails}
          selectedSlide={selectedSlide}
          handleSlideSelection={handleSlideSelection}
          handleModal={handleModal}
        />
      )}
    </>
  );
}
