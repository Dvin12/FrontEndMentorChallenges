import { useState } from "react";

export default function Newsletter() {
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
    <article className="flex flex-col items-center justify-center w-full gap-5 px-6 py-14 bg-desBlue text-gBlue xl:flex-row xl:py-28 xl:px-20 xl:justify-between xl:gap-52 ">
      <div>
        <h5 className="text-lg font-bold tracking-wider text-center xl:text-left font-Raleway xl:text-3xl ">
          Get early access today
        </h5>
        <p className="px-2 text-sm tracking-wider text-center xl:text-left xl:px-0 xl:text-base xl:pt-6 xl:w-[35rem] pt-4 ">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <div
        className={`relative flex flex-col items-center justify-center w-3/4 ${
          isValid ? "gap-2 xl:gap-3" : "gap-10 xl:gap-7"
        } xl:items-start  xl:justify-between`}
      >
        <input
          type="text"
          className="w-full px-3 py-3 text-xs rounded shadow-md outline-none xl:text-base text-dBlue "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
        />
        <button
          className="w-full py-3 text-xs tracking-wide rounded shadow-md bg-blue xl:text-sm xl:w-[12rem] hover:brightness-125 duration-200"
          onClick={handleClick}
        >
          Get Started For Free
        </button>
        {!isValid ? (
          <p className="absolute text-sm top-12">Please check your email</p>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}
