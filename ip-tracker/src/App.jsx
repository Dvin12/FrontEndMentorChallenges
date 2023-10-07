import { useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Main from "./components/Main";
import Map from "./components/Map";

export default function App() {
  const [ip, setIp] = useState([]);
  return (
    <Main>
      <Header setIp={setIp} />
      <Info />
      <Map />
    </Main>
  );
}
