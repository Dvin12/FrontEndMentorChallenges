import Bill from "./components/Bill";
import Tip from "./components/Tip";
import BillComponent from "./components/BillComponent";
import Header from "./components/Header";
import People from "./components/People";
import Reset from "./components/Reset";
import Total from "./components/Total";
import TipAmount from "./components/TipAmount";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [selectedTip, setSelectedTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");

  const tipAmount =
    bill && people
      ? ((selectedTip || customTip || 0) * bill) / 100 / people
      : 0;

  const totalAmount = bill && people ? (bill + tipAmount) / people : 0;

  function handleReset() {
    setBill("");
    setSelectedTip("");
    setCustomTip("");
    setPeople("");
  }

  return (
    <main className="bg-[hsl(185,41%,84%)] md:h-screen  font-SpaceMono md:grid md:place-content-center h-screen w-full py-8">
      <Header />
      <BillComponent>
        <article className="w-full flex flex-col gap-8 justify-evenly ">
          <Bill bill={bill} setBill={setBill} />
          <Tip
            selectedTip={selectedTip}
            setSelectedTip={setSelectedTip}
            customTip={customTip}
            setCustomTip={setCustomTip}
          />
          <People people={people} setPeople={setPeople} />
        </article>
        <aside className="w-full flex flex-col gap-8  bg-[hsl(183,100%,15%)]  justify-between  rounded-2xl h-full md:p-12 p-8">
          <div className="flex flex-col gap-12">
            <TipAmount tipAmount={tipAmount} />
            <Total totalAmount={totalAmount} />
          </div>
          <Reset handleReset={handleReset} bill={bill} people={people} />
        </aside>
      </BillComponent>
    </main>
  );
}
