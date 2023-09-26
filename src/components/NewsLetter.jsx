import { useState } from "react";

export default function NewsLetter() {
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
    <section className="absolute  bg-introEmail flex flex-col justify-center items-center text-cyan px-5 py-10 rounded-md drop-shadow-lg -bottom-[28rem] z-30 left-0 mx-6 xl:px-12  xl:mx-96 xl:right-0 xl:-bottom-[25rem]   ">
      <h4 className="text-lg font-bold tracking-wider font-raleway xl:text-center xl:text-3xl text-[#fff]">
        Get early access today
      </h4>
      <p className="py-6 text-sm text-center xl:w-[40rem]">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div
        className={`relative flex flex-col items-center justify-center w-full ${
          isValid ? "gap-5" : "gap-8"
        } xl:flex-row`}
      >
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-3 rounded-full shadow-xl xl:w-[30rem] outline-none text-footer px-6"
        />
        <button
          className="w-full py-4 font-extrabold rounded-full bg-gradient-to-r from-cyan from-0% to-blue to-70% font-raleway text-sm tracking-wide text-[#fff] shadow-xl xl:w-[14rem] hover:brightness-110 duration-200"
          onClick={handleClick}
        >
          Get Started For Free
        </button>

        {isValid ? (
          ""
        ) : (
          <p className="absolute text-sm font-semibold xl:left-44 xl:top-14 text-lRed">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  );
}
