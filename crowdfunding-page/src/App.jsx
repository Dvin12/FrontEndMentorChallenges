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
  const [noReward, setNoReward] = useState(false);
  const [noRewardAmount, setNoRewardAmount] = useState("");
  const [bamboo, setBamboo] = useState(false);
  const [bambooAmount, setBambooAmount] = useState("");
  const [bambooLeft, setBambooLeft] = useState(101);
  const [black, setBlack] = useState(false);
  const [blackAmount, setBlackAmount] = useState("");
  const [blackLeft, setBlackLeft] = useState(64);
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
          blackLeft={blackLeft}
          bambooLeft={bambooLeft}
        />
      </Section>
      {activeModal ? (
        <Modal
          setActiveModal={setActiveModal}
          setBacked={setBacked}
          setTotalBackers={setTotalBackers}
          noReward={noReward}
          setNoReward={setNoReward}
          bamboo={bamboo}
          setBamboo={setBamboo}
          black={black}
          setBlack={setBlack}
          setBlackAmount={setBlackAmount}
          blackAmount={blackAmount}
          setBambooAmount={setBambooAmount}
          bambooAmount={bambooAmount}
          setNoRewardAmount={setNoRewardAmount}
          noRewardAmount={noRewardAmount}
          blackLeft={blackLeft}
          bambooLeft={bambooLeft}
          setBambooLeft={setBambooLeft}
          setBlackLeft={setBlackLeft}
        />
      ) : (
        ""
      )}
    </Main>
  );
}
