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
      <article className="flex flex-col items-center justify-center w-full text-center my-28">
        <h2 className="text-3xl font-bold text-dBlue ">
          Keep track of your snippets
        </h2>
        <p className="mt-8">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </article>

      <article className="flex flex-col items-center justify-center w-full">
        <img
          src="./assets/images/image-computer.png"
          alt="monitor"
          className="mb-6"
        />
        {snippets.map((snippet, i) => (
          <Snippet snippet={snippet} key={i} />
        ))}
      </article>
    </>
  );
}
