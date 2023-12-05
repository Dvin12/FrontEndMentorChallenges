import { useState } from "react";
import Modal from "./Modal";
import { Product } from "./Interfaces";

interface ImagesThumbnails {
  images: Product[];
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
      <section className="hidden flex-col items-center justify-center xl:flex  ">
        <div onClick={handleModal}>
          <img
            src={images[0].image}
            alt=""
            className=" w-[480px] cursor-pointer rounded-2xl"
          />
        </div>
        <div className="my-10 flex items-center gap-5">
          {thumbnails.map((thumbnail, i) => (
            <div
              onClick={handleModal}
              key={i}
              className={`rounded-xl border-[3px]  ${
                0 === i
                  ? "border-orange border-opacity-100 duration-200"
                  : " cursor-pointer border-transparent"
              }`}
            >
              <img
                src={thumbnail.thumbnail}
                className={`w-[100px] rounded-lg ${
                  0 === i ? " opacity-40" : " duration-300 hover:opacity-40"
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
