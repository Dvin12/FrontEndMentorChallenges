import Tracker from "./components/Tracker";
import UserReportCard from "./components/UserReportCard";
import Card from "./components/Card";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState(true);
  const [monthly, setMonthly] = useState(false);

  useEffect(() => {
    async function timeData() {
      const response = await fetch("./data.json");
      const data = await response.json();
      setData(data);
    }

    timeData();
  }, []);

  function handleDaily() {
    setDaily(true);
    setWeekly(false);
    setMonthly(false);
  }

  function handleWeekly() {
    setDaily(false);
    setWeekly(true);
    setMonthly(false);
  }

  function handleMonthly() {
    setDaily(false);
    setWeekly(false);
    setMonthly(true);
  }

  return (
    <main className="bg-[hsl(226,43%,10%)]  md:h-screen w-full h-full text-white font-Rubik md:grid md:place-content-center  ">
      <Tracker>
        <UserReportCard
          handleDaily={handleDaily}
          handleMonthly={handleMonthly}
          handleWeekly={handleWeekly}
          daily={daily}
          weekly={weekly}
          monthly={monthly}
        />
        {data.map((card, i) => (
          <Card
            card={card}
            key={i}
            num={i}
            daily={daily}
            weekly={weekly}
            monthly={monthly}
          />
        ))}
      </Tracker>
    </main>
  );
}
