import Main from "./components/Main";
import Background from "./components/Background";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { useState } from "react";

export default function App() {
  const [annually, setAnnually] = useState(false);

  function handleClick() {
    setAnnually((click) => (click !== false ? false : true));
  }

  return (
    <Main>
      <Background />
      <Header handleClick={handleClick} annually={annually} />
      <Cards annually={annually} />
    </Main>
  );
}
