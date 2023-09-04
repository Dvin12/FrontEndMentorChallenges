import Snippet from "./Snippet";

const snippets = [
  {
    name: "Quick Search",
    text: "Easily search your snippets by content, category, web address, application and more.",
  },

  {
    name: "iCloud Sync",
    text: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    name: "Complete History",
    text: "Retrieve any snippets from the first moment you started using the app.",
  },
];

export default function Snippets() {
  return (
    <>
      <article className="flex flex-col items-center justify-center w-full text-center my-28 xl:text-xl ">
        <h2 className="text-3xl font-bold xl:text-5xl text-dBlue ">
          Keep track of your snippets
        </h2>
        <p className="mt-8 xl:w-[48rem]">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </article>

      <article className="flex flex-col items-center justify-center w-full xl:flex-row xl:items-start ">
        <img
          src="./assets/images/image-computer.png"
          alt="monitor"
          className="mb-6 xl:w-full xl:mb-0 xl:-translate-x-20 "
        />
        <div className="xl:gap-8 xl:flex xl:flex-col xl:items-center xl:justify-center xl:w-full xl:mt-0 2xl:mt-10 ">
          {snippets.map((snippet, i) => (
            <Snippet snippet={snippet} key={i} />
          ))}
        </div>
      </article>
    </>
  );
}
