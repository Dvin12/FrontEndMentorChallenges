import { useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Main from "./components/Main";
import Map from "./components/Map";

export default function App() {
  const [ip, setIp] = useState([]);
  console.log(ip);
  return (
    <Main>
      <Header setIp={setIp} ip={ip} />
      <Info ip={ip} />
      <Map />
    </Main>
  );
}
