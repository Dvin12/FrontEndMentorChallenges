import { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailRegEx.test(email) || email === "") {
      setValid(false);
    } else {
      setValid(true);
      setEmail("");
    }
  }

  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 mt-20 bg-sBlue text-[#fff] text-opacity-90 text-center">
      <span className="tracking-[3px] text-sm ">35,000+ ALREADY JOINED</span>
      <h5 className="my-2 text-2xl font-medium xl:text-4xl xl:w-1/4 xl:my-4">
        Stay up-to-date with what we're doing
      </h5>
      <form
        className={`flex flex-col xl:gap-6 items-center xl:flex-row  justify-center w-full ${
          !valid ? "gap-10" : "gap-4 "
        }  mt-6 relative`}
        onSubmit={handleSubmit}
      >
        <div className="relative w-[20%]">
          <input
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full xl:w-full px-4 py-3 rounded-md shadow-md text-vDarkBlue placeholder:opacity-40 ${
              !valid ? " border-sRed border-[3px] outline-none" : ""
            }`}
          />
          {!valid && (
            <p className="absolute z-10 w-full xl:w-full xl:left-0  px-3 py-1 text-xs italic font-medium text-left rounded-b-md top-[50px] bg-sRed text-opacity-70">
              Whoops, make sure it's an email
            </p>
          )}
          {!valid && (
            <div className="absolute top-4 right-4 xl:right-6 ">
              <img src="./assets/images/icon-error.svg" alt="error" />
            </div>
          )}
        </div>

        <button className="w-full py-3 rounded-md shadow-md xl:w-fit xl:px-6 bg-sRed">
          Contact Us
        </button>
      </form>
    </section>
  );
}
