import { useState } from "react";
import Feature from "./Feature";

const features = [
  {
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "./assets/images/illustration-features-tab-1.svg",
  },

  {
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "./assets/images/illustration-features-tab-2.svg",
  },

  {
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
    image: "./assets/images/illustration-features-tab-3.svg",
  },
];

export default function Features() {
  const [selected, setIsSelected] = useState(0);

  function handleBookmarking() {
    setIsSelected(0);
  }

  function handleSearching() {
    setIsSelected(1);
  }

  function handleSharing() {
    setIsSelected(2);
  }

  return (
    <>
      <article className="flex flex-col items-center justify-center w-full px-8 text-center mt-28 xl:mt-40">
        <h2 className="text-2xl font-medium xl:text-3xl">Features</h2>
        <p className="mt-2 leading-normal xl:mt-6 xl:text-xl xl:w-[40rem] ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </article>
      <div className="px-6 mt-6 xl:px-80 xl:mt-12">
        <ul className="flex flex-col items-center justify-center text-center text-vDarkBlue xl:flex-row xl:border-b-[1px] xl:text-lg">
          <li
            className="w-full py-4 border-t-[1px] border-gBlue cursor-pointer relative xl:border-none xl:py-6"
            onClick={handleBookmarking}
          >
            <span> Simple Bookmarking</span>
            {selected === 0 && (
              <div className="absolute bottom-0 w-[50%] xl:w-[100%] h-1 bg-sRed translate-x-1/2 xl:translate-x-0"></div>
            )}
          </li>
          <li
            className="w-full py-4 border-t-[1px] border-gBlue cursor-pointer relative xl:border-none  xl:py-6"
            onClick={handleSearching}
          >
            <span>Speedy Searching</span>
            {selected === 1 && (
              <div className="absolute bottom-0 w-[50%] h-1 bg-sRed translate-x-1/2 xl:translate-x-0 xl:w-[100%]"></div>
            )}
          </li>
          <li
            className="w-full py-4 border-t-[1px] border-b-[1px] border-gBlue cursor-pointer relative xl:border-none  xl:py-6"
            onClick={handleSharing}
          >
            <span>Easy Sharing</span>

            {selected === 2 && (
              <div className="absolute bottom-0 w-[50%] h-1 bg-sRed translate-x-1/2 xl:translate-x-0 xl:w-[100%]"></div>
            )}
          </li>
        </ul>
      </div>

      {features.map((feature, i) => (
        <Feature feature={feature} key={i} num={i} selected={selected} />
      ))}
    </>
  );
}
