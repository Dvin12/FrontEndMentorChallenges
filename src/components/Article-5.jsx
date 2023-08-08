export default function Article5() {
  return (
    <article className="bg-[hsl(219,29%,14%)] col-span-2 row-span-2 rounded-xl shadow-xl md:px-12 md:py-10 px-8 py-6   w-full h-full ">
      <div className="flex flex-col gap-4 w-full h-full justify-evenly">
        <div className="flex items-center gap-4">
          <img
            src="./assets/images/image-patrick.jpg"
            alt="daniel"
            className="rounded-full border-[2px] w-10 border-[hsl(263,55%,72%)]"
          />
          <div className="flex flex-col text-sm ">
            <span className="text-[hsl(210,46%,95%)]">Patrick Abrams</span>
            <span className="text-[hsl(210,16%,55%)] ">Verified Graduate</span>
          </div>
        </div>
        <p className="font-extrabold text-2xl text-white tracking-wide  ">
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </p>
        <p className="text-[hsl(210,16%,65%)] text-justify ">
          &ldquo; The staff seem genuinely concerned about my progress which I
          find really refreshing. The program gave me the confidence necessary
          to be able to go out in the world and present myself as a capable
          junior developer. The standard is above the rest. You will get the
          personal attention you need from an incredible community of smart and
          amazing people. &rdquo;
        </p>
      </div>
    </article>
  );
}
