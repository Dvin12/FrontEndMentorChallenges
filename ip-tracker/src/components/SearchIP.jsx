import { useState } from "react";

export default function SearchIP({ setIp }) {
  const [input, setInput] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Type IP address"
        className="absolute top-24 left-1/2 -translate-x-1/2 px-6 py-4 w-[90%] rounded-2xl "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="absolute top-24 right-[4.8%] px-5 py-[1.3rem] bg-veryDarkGrey rounded-tr-2xl rounded-br-2xl ">
        <img src="./images/icon-arrow.svg" alt="button" />
      </button>
    </form>
  );
}
