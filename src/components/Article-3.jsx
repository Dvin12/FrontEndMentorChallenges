export default function Article3() {
  return (
    <article className="bg-white row-span-4 rounded-xl shadow-xl md:px-12 md:py-10 px-8 py-6   w-full h-full ">
      <div className="flex flex-col gap-4 w-full h-full justify-evenly">
        <div className="flex items-center gap-4">
          <img
            src="./assets/images/image-kira.jpg"
            alt="daniel"
            className="rounded-full  w-10 "
          />
          <div className="flex flex-col text-sm ">
            <span className="text-[hsl(219,29%,30%)]">Kira Whittle</span>
            <span className="text-[hsl(217,19%,70%)] font-bold">
              Verified Graduate
            </span>
          </div>
        </div>
        <p className="font-extrabold text-2xl tracking-wide text-[hsl(219,29%,30%)]">
          Such a life-changing experience. Highly recommended!
        </p>
        <p className="text-[hsl(219,29%,50%)] text-lg ">
          &ldquo; Before joining the bootcamp, I've never written a line of
          code. I needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in practicular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I've
          often referred to it during interviews as an example of my development
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! &rdquo;
        </p>
      </div>
    </article>
  );
}
