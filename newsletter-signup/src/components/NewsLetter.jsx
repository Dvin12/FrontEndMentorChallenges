import { useState } from "react";

export default function NewsLetter({ setSubsribed, setEmail }) {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!emailInput.includes("@")) {
      setEmailError("Valid email required");
      return;
    }
    setEmail(emailInput);
    setSubsribed(true);
  }

  return (
    <section className="bg-white md:w-[900px] md:h-[600px] md:rounded-[30px]   shadow-2xl">
      <section className="md:grid-cols-2 md:grid flex flex-col-reverse ">
        <article className="flex flex-col md:my-12 items-center justify-center ">
          <form
            className="md:w-[320px] flex flex-col md:mt-8 mx-6 my-8 md:mx-0 md:my-0 gap-4"
            onSubmit={handleSubmit}
          >
            <h1 className="md:text-5xl text-3xl font-bold text-[hsl(234,29%,20%)]">
              Stay updated!
            </h1>
            <p className="my-2 text-sm">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="w-full text-sm flex flex-col justify-start items-start gap-3 ">
              <li className="flex justify-center items-center gap-4">
                <img src="./assets/images/icon-list.svg" alt="checkmark" />
                <span>Product discovery and building what matters</span>
              </li>

              <li className="flex justify-center items-center gap-4">
                <img src="./assets/images/icon-list.svg" alt="checkmark" />
                <span>Measuring to ensure updates are a success</span>
              </li>
              <li className="flex justify-center items-center gap-4">
                <img src="./assets/images/icon-list.svg" alt="checkmark" />
                <span>And much more!</span>
              </li>
            </ul>
            <section className="flex flex-col justify-center my-6">
              <div className="flex items-center justify-between text-xs pb-2 font-bold">
                <label className="  ">Email address</label>
                {emailError && (
                  <label className="text-[hsl(4,100%,67%)]">
                    Valid email required
                  </label>
                )}
              </div>
              <input
                type="text"
                placeholder="email@company.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className={
                  emailError === ""
                    ? "py-4 px-4 border rounded-lg focus:outline-none focus:border-1 focus:border-black cursor-pointer"
                    : "py-4 px-4 border border-[hsl(4,100%,67%)] rounded-lg bg-rose-100 focus:outline-none focus:border-1 focus:border-[hsl(4,100%,67%)] cursor-pointer"
                }
              />
              <button className="bg-[hsl(234,29%,20%)] hover:bg-gradient-to-r from-[#FE5475] to-[#FE6741] hover:shadow-2xl py-4 rounded-lg text-white my-5">
                Subsribe to monthly newsletter
              </button>
            </section>
          </form>
        </article>
        <section className="flex  justify-center md:pl-5 w-full h-full  ">
          <div className="md:py-3 w-full md:h-[520px]  h-[500px] md:w-auto ">
            <img
              src="./assets/images/illustration-sign-up-desktop.svg"
              className="md:h-[570px] md:w-[400px] w-full h-full  md:object-fill  "
            />
          </div>
        </section>
      </section>
    </section>
  );
}
