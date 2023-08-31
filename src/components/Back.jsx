import { useState } from "react";

export default function Back({ setActiveModal }) {
  function handleBackProject() {
    setActiveModal(true);
  }

  const [bookmarked, setBookmarked] = useState(true);

  function handleBookmark() {
    setBookmarked((c) => (c !== true ? true : false));
  }

  return (
    <article className=" z-40 flex flex-col items-center justify-between w-full px-6 py-12 text-center shadow-md -mt-14  bg-[#fff] rounded-md xl:-mt-28   xl:py-14 ">
      <img
        src="./assets/images/logo-mastercraft.svg"
        alt=""
        className="absolute -top-[5.4rem] xl:-top-[9rem]"
      />
      <h1 className="w-[70%] text-xl font-bold xl:text-3xl xl:w-full">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="my-4 text-sm leading-relaxed text-dCyan xl:text-base">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <section className="flex items-center justify-between w-full my-2 xl:my-6 xl:justify-center xl:pr-28 xl:gap-10 ">
        <button
          className="px-10 py-4 rounded-full bg-cyan text-[#fff] font-medium "
          onClick={handleBackProject}
        >
          Back this project
        </button>
        <button
          className="relative flex items-center justify-center "
          onClick={handleBookmark}
        >
          <img
            src="./assets/images/icon-bookmark.svg"
            alt="bookmark"
            className="z-30"
          />

          <span
            className={`absolute w-[9rem] h-[3rem] text-center rounded-full  left-8 bg-cyan bg-opacity-10 hidden items-center justify-end ${
              bookmarked ? "pr-4" : "pr-8"
            } font-bold  text-dCyan xl:flex`}
          >
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </span>
        </button>
      </section>
    </article>
  );
}
