import { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard";
import axios from "axios";

export default function App() {
  const [advice, setAdvice] = useState([]);
  useEffect(() => {
    getAdvice();
  }, []);

  function getAdvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((respond) => {
        setAdvice([respond.data.slip]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(advice);
  return (
    <main className="bg-[hsl(218,23%,16%)] h-screen w-screen font-Manrope grid place-content-center">
      {advice.map((quote) => (
        <AdviceCard key={quote.id} quote={quote} getAdvice={getAdvice} />
      ))}
    </main>
  );
}
