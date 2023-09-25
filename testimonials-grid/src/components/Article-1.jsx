export default function Article1() {
  return (
    <article className="bg-[hsl(263,55%,52%)] rounded-xl col-span-2 row-span-2 shadow-xl md:px-12 px-8 py-6 md:py-10 relative w-full h-full  ">
      <div className="flex flex-col gap-4 w-full h-full justify-evenly z-30 relative">
        <div className="flex items-center gap-4">
          <img
            src="./assets/images/image-daniel.jpg"
            alt="daniel"
            className="rounded-full border-[2px] w-10 border-[hsl(263,55%,72%)]"
          />
          <div className="flex flex-col text-sm ">
            <span className="text-[hsl(210,46%,95%)]">Daniel Clifford</span>
            <span className="text-[hsl(210,46%,70%)] font-bold">
              Verified Graduate
            </span>
          </div>
        </div>
        <p className="font-extrabold text-2xl text-white tracking-wide  ">
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny's worth.
        </p>
        <p className="text-[hsl(210,46%,70%)] text-justify ">
          &ldquo; I was an EMT for many years before I joined the bootcamp. I've
          been looking to make a transition and have heard some people who had
          an amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I've successfully switched carrers, working as
          a Software Engineer at a VR startup.&rdquo;
        </p>
      </div>
      <span className="absolute top-0 md:right-40 right-10 z-20 flex">
        <img
          src="./assets/images/bg-pattern-quotation.svg"
          alt=""
          className="md:w-[150px] flex z-40"
        />
      </span>
    </article>
  );
}
