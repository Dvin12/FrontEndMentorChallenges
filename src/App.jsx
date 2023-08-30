import Main from "./components/Main";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Back from "./components/Back";
import Total from "./components/Total";
import Reward from "./components/Reward";
import Modal from "./components/Modal";
import { useState } from "react";

export default function App() {
  const [backed, setBacked] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);
  const [bamboo, setBamboo] = useState(false);
  const [black, setBlack] = useState(false);
  const [activeModal, setActiveModal] = useState(false);

  return (
    <Main>
      <Header />
      <Nav />
      <Section>
        <Back setActiveModal={setActiveModal} />
        <Total totalBackers={totalBackers} backed={backed} />
        <Reward
          setBamboo={setBamboo}
          setBlack={setBlack}
          setActiveModal={setActiveModal}
        />
      </Section>
      {activeModal ? <Modal setActiveModal={setActiveModal} /> : ""}
    </Main>
  );
}
