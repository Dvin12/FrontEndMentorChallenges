import Main from "./components/Main";
import Header from "./components/Header";
import TotalFollowers from "./components/TotalFollowers";
import DarkMode from "./components/DarkMode";
import OverviewTotal from "./components/OverviewTotal";
import OverviewToday from "./components/OverviewToday";
import { useState, useEffect } from "react";

const followers = `https://my-json-server.typicode.com/dvin12/social-media-dashboard/followers`;
const overview =
  "https://my-json-server.typicode.com/dvin12/social-media-dashboard/Overview";

export default function App() {
  const [followersData, setFollowersData] = useState([]);
  const [overviewData, setOverviewData] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(function () {
    async function getData() {
      try {
        const response = await fetch(`${followers}`);
        const data = await response.json();
        setFollowersData(data);
      } catch (err) {
        console.log("There was an error fetching");
      }
    }
    getData();
  }, []);

  useEffect(function () {
    async function getData() {
      try {
        const response = await fetch(`${overview}`);
        const data = await response.json();
        setOverviewData(data);
      } catch (err) {
        console.log("There was an error fetching");
      }
    }
    getData();
  }, []);

  useEffect(
    function () {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [theme]
  );

  return (
    <Main>
      <Header>
        <TotalFollowers />
        <DarkMode setTheme={setTheme} theme={theme} />
      </Header>
      <OverviewTotal followersData={followersData} />
      <OverviewToday overviewData={overviewData} />
    </Main>
  );
}
