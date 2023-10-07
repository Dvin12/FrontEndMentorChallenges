import { useState } from "react";

export default function SearchIP({ setIp }) {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const ipRegex =
    /\b(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;

  function handleSubmit(e) {
    e.preventDefault();
    if (input === "" || !input.match(ipRegex)) {
      setIsValid(false);
      setInput("");
    } else {
      setIsValid(true);
      const fetchData = async () => {
        const response = await fetch(
          `
          https://geo.ipify.org/api/v2/country,city?apiKey=${
            import.meta.env.VITE_API_KEY
          }&ipAddress=${input}`
        );
        const data = await response.json();

        setIp([
          {
            ip: data.ip,
            isp: data.isp,
            country: data.location.country,
            region: data.location.region,
            geocode: [data.location.lat, data.location.lng],

            timezone: data.location.timezone,
          },
        ]);
      };
      fetchData();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type IP address"
        className="absolute top-24 left-1/2 -translate-x-1/2 px-6 py-4 w-[90%] xl:w-[50%] rounded-2xl 2xl:top-32 xl:font-medium "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="absolute top-24 2xl:top-32 right-[4.8%] xl:right-[24.9%] px-5 py-[1.3rem] bg-veryDarkGrey rounded-tr-2xl rounded-br-2xl hover:bg-opacity-70 duration-200 ">
        <img src="./images/icon-arrow.svg" alt="button" />
      </button>
    </form>
  );
}
