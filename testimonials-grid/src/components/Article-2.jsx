export default function Article2() {
  return (
    <article className="bg-[hsl(217,19%,35%)] row-span-2 rounded-xl shadow-xl md:px-12 md:py-10 px-8 py-6  w-full h-full ">
      <div className="flex flex-col gap-4 w-full h-full justify-evenly">
        <div className="flex items-center gap-4">
          <img
            src="./assets/images/image-jonathan.jpg"
            alt="jonathan"
            className="rounded-full  w-10 "
          />
          <div className="flex flex-col text-sm ">
            <span className="text-[hsl(210,46%,95%)]">Jonathan Walters</span>
            <span className="text-[hsl(217,19%,70%)] font-bold">
              Verified Graduate
            </span>
          </div>
        </div>
        <p className="font-extrabold text-2xl text-white tracking-wide">
          The team was very supportive and kept me motivated
        </p>
        <p className="text-[hsl(217,19%,80%)] text-lg ">
          &ldquo;I started as a total newbie with virtually no coding skills. I
          now work as a mobile engineer for a big company. This was one of the
          best investments I've made in myself. &rdquo;
        </p>
      </div>
    </article>
  );
}
