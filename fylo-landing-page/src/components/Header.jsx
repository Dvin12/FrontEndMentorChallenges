import { useState } from "react";

export default function Header() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleClick() {
    if (!email.includes("@")) {
      setIsValid(false);
    } else {
      setEmail("");
      setIsValid(true);
    }
  }

  return (
    <header className="flex flex-col items-center justify-center w-full gap-2 p-6 xl:flex-row xl:gap-0 xl:py-5 xl:px-20">
      <img
        src="./assets/images/illustration-1.svg"
        alt="illustration"
        className="mt-16 xl:order-last xl:w-1/2 xl:mt-0 "
      />
      <aside className="flex flex-col items-center justify-center w-full h-ful xl:items-start xl:justify-start">
        <h2 className="text-2xl font-bold leading-normal tracking-wide text-center font-Raleway xl:text-left xl:text-4xl xl:leading-relaxed xl:w-[40rem]">
          All your files in one secure location, accessible anywhere.
        </h2>
        <p className="pt-6 text-sm tracking-wide text-center xl:text-base xl:text-left xl:w-[35rem] xl:pt-7 xl:leading-relaxed">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="flex flex-col items-center justify-center w-full gap-3 px-3 pt-8 font-Raleway xl:flex-row xl:items-center xl:justify-start xl:px-0 xl:w-[35rem] relative">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className={`w-full text-sm border-[1px] ${
              !isValid ? "border-[#fa5549]" : "border-dBlue"
            } px-8 py-3 rounded-md outline-none  focus:border-[2px] focus:border-opacity-60`}
          />
          <button
            className={`w-full py-3 ${
              !isValid ? "mt-3" : ""
            }  text-sm font-bold rounded-md shadow-lg text-gBlue bg-blue xl:w-[60%] hover:opacity-70 duration-200 xl:mt-0`}
            onClick={handleClick}
          >
            Get Started
          </button>

          {!isValid ? (
            <p className="absolute text-sm top-20 fp  text-[#fa5549] font-openSans">
              Please check your email
            </p>
          ) : (
            ""
          )}
        </div>
      </aside>
    </header>
  );
}
