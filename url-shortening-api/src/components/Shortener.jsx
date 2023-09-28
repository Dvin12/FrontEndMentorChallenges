import { useState } from "react";
import Button from "./Button";

export default function Shortener({
  setInput,
  input,
  setIsLoading,
  isLoading,
}) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const urlRegex =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  function handleSubmit(e) {
    e.preventDefault();
    if (value === "" || !value.match(urlRegex)) {
      setIsValid(true);
      setValue("");
    } else {
      setIsValid(false);
      const fetchLink = async () => {
        setIsLoading(true);
        const res = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${value}`
        );
        const data = await res.json();
        setInput([
          ...input,
          {
            original: value,
            converted: data.result.full_short_link,
          },
        ]);
        setTimeout(() => setIsLoading(false), 800);
      };

      fetchLink();
    }
  }

  return (
    <div className="absolute -top-20  -translate-x-1/2 left-1/2  bg-dViolet  w-[88%] flex flex-col items-center justify-center py-7 gap-4 rounded-xl px-6 overflow-hidden">
      <img
        src="./images/bg-shorten-mobile.svg"
        alt="background"
        className="absolute w-full -top-10 -right-20 -z-30"
      />
      <form
        className={`relative flex flex-col w-full ${
          isValid ? "gap-8" : "gap-4"
        } `}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className={`w-full px-4 py-3 tracking-wide rounded-md ${
            isValid && "outline-none border-[2px] border-Red"
          }`}
          placeholder="Shorten a link here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {isValid && (
          <p className="absolute text-sm italic top-14 text-Red">
            Please add a link
          </p>
        )}
        <Button width="full" rounded="md" isLoading={isLoading}>
          Shorten it
        </Button>
      </form>
    </div>
  );
}
