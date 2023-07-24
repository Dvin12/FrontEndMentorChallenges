import { useEffect, useState } from "react";

export default function AdviceCard({ quote, getAdvice }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const isMobile = windowWidth <= breakpoint;

  return (
    <section className=" bg-[hsl(217,19%,24%)] md:w-[600px] h-full rounded-2xl drop-shadow-xl w-[350px]">
      <article className="flex flex-col items-center   justify-center md:px-12 md:py-20 py-16 px-8 relative ">
        <span className="text-[hsl(150,100%,66%)] tracking-[6px] md:text-sm text-xs">
          ADVICE #{quote.id}
        </span>
        <p className="text-2xl md:text-3xl  text-[hsl(193,38%,86%)] text-center  py-8">
          &ldquo;{quote.advice}&rdquo;
        </p>
        <img
          src={`./assets/images/${
            isMobile
              ? "pattern-divider-mobile.svg"
              : "pattern-divider-desktop.svg"
          }`}
          alt=""
          className="w-full h-full"
        />
        <div className="absolute  bottom-[-10%]">
          <button
            onClick={getAdvice}
            className=" w-16 h-16  rounded-full bg-[hsl(150,100%,66%)] flex items-center justify-center active:w-14 active:h-14   hover:glow duration-200 transition-all"
          >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </button>
        </div>
      </article>
    </section>
  );
}
