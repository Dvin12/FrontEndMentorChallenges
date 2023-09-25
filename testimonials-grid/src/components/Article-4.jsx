export default function Article4() {
  return (
    <article className="bg-white row-span-2 rounded-xl shadow-xl md:px-12 md:py-10 px-8 py-6   w-full h-full ">
      <div className="flex flex-col  w-full h-full justify-evenly gap-4 md:gap-0 ">
        <div className="flex items-center gap-4">
          <img
            src="./assets/images/image-jeanette.jpg"
            alt="jeanette"
            className="rounded-full  w-10 "
          />
          <div className="flex flex-col text-sm ">
            <span className="text-[hsl(219,29%,30%)]">Jeanette Harmon</span>
            <span className="text-[hsl(217,19%,70%)] font-bold">
              Verified Graduate
            </span>
          </div>
        </div>
        <p className="font-extrabold text-2xl text-[hsl(219,29%,30%)] tracking-wide w-full md:w-[220px]">
          An overall wonderful and rewarding experience
        </p>
        <p className="text-[hsl(219,29%,50%)] text-lg ">
          &ldquo; Thank you for the wonderful experience! I now have a job I
          really enjoy, and make a good living while doing something I love
          &rdquo;
        </p>
      </div>
    </article>
  );
}
