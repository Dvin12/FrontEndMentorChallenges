import { useState } from "react";
import Button from "./Button";

export default function Shortener({
  setInput,
  input,
  setIsLoading,
  isLoading,
}) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value === "") return;
    const fetchLink = async () => {
      setIsLoading(true);
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`);
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

  return (
    <div className="absolute -top-20  -translate-x-1/2 left-1/2  bg-dViolet  w-[88%] flex flex-col items-center justify-center py-7 gap-4 rounded-xl px-6 overflow-hidden">
      <img
        src="./images/bg-shorten-mobile.svg"
        alt="background"
        className="absolute w-full -top-10 -right-20 -z-30"
      />
      <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full px-4 py-3 tracking-wide rounded-md"
          placeholder="Shorten a link here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button width="full" rounded="md" isLoading={isLoading}>
          Shorten it
        </Button>
      </form>
    </div>
  );
}
