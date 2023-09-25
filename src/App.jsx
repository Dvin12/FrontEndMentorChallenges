import { useEffect, useState } from "react";
import Balance from "./components/Balance";
import Chart from "./components/Chart";

export default function App() {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    async function chartData() {
      const response = await fetch("./assets/data.json");
      const data = await response.json();
      setChart(data);
    }
    chartData();
  }, []);

  return (
    <main className="bg-[hsl(27,66%,92%)] font-DMSans h-screen grid place-content-center w-full  gap-5 ">
      <Balance />
      <Chart chart={chart} />
    </main>
  );
}
