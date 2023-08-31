import { useState } from "react";
import Pledge from "./Pledge";
import Success from "./Success";

export default function Modal({
  setActiveModal,
  setBacked,
  setTotalBackers,
  bamboo,
  setBamboo,
  black,
  setBlack,
  noReward,
  setNoReward,
  setBlackAmount,
  blackAmount,
  setBambooAmount,
  bambooAmount,
  setNoRewardAmount,
  noRewardAmount,
  blackLeft,
  bambooLeft,
  setBambooLeft,
  setBlackLeft,
}) {
  const [success, setSuccess] = useState(false);

  return (
    <section className="absolute top-0 z-50 w-full h-full px-6 bg-black bg-opacity-40 xl:px-72 ">
      {success ? (
        <Success
          setSuccess={setSuccess}
          setActiveModal={setActiveModal}
          setBamboo={setBamboo}
          setBlack={setBlack}
          setNoReward={setNoReward}
        />
      ) : (
        <Pledge
          setActiveModal={setActiveModal}
          setBacked={setBacked}
          setTotalBackers={setTotalBackers}
          bamboo={bamboo}
          setBamboo={setBamboo}
          black={black}
          setBlack={setBlack}
          noReward={noReward}
          setNoReward={setNoReward}
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
          setSuccess={setSuccess}
        />
      )}
    </section>
  );
}
