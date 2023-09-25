import { useState } from "react";

import AgeDisplay from "./components/AgeDisplay";
import AgeForm from "./components/AgeForm";
import Footer from "./components/Footer";

export default function App() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  return (
    <>
      <div className="app">
        <AgeForm setDay={setDay} setMonth={setMonth} setYear={setYear} />
        <AgeDisplay day={day} month={month} year={year} />
      </div>
      <Footer />
    </>
  );
}
