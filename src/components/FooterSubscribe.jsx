import { useState } from "react";
import Button from "./Button";

export default function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleSubmit(e) {
    e.preventDefault();
    if (emailRegEx.test(email)) {
      setValid(true);
      setEmail("");
    } else if (!emailRegEx.test(email) || email === "") {
      setValid(false);
    }
  }

  return (
    <div className="relative w-full xl:order-last">
      <form
        className="flex items-center justify-center w-full gap-2 px-6 my-10 text-sm xl:my-0"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-6 py-3 rounded-full md:w-[50%] "
          placeholder="Updates in your inbox..."
        />
        <Button>GO</Button>
      </form>
      {!valid && (
        <p className="absolute text-sm italic xl:left-[22%] xl:top-14 top-[5.4rem] left-10 md:left-48 text-brightRed opacity-80">
          Please insert a valid email
        </p>
      )}
    </div>
  );
}
