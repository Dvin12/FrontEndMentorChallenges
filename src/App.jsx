import Main from "./components/Main";
import Header from "./components/Header";
import TotalFollowers from "./components/TotalFollowers";
import DarkMode from "./components/DarkMode";
import OverviewTotal from "./components/OverviewTotal";
import OverviewToday from "./components/OverviewToday";
import { useState } from "react";
import { useEffect } from "react";

const URL = `https://my-json-server.typicode.com/dvin12/social-media-dashboard/followers`;

export default function App() {
  const [analyticData, setAnalyticData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL}`);
        const data = await response.json();
        setAnalyticData(data);
      } catch (err) {
        console.log("There was an error fetching");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  console.log(analyticData);

  return (
    <Main>
      <Header>
        <TotalFollowers />
        <DarkMode />
      </Header>
      <OverviewTotal analyticData={analyticData} />
      <OverviewToday analyticData={analyticData} />
    </Main>
  );
}
