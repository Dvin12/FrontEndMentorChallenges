import { useState } from "react";
import Images from "./components/Images";
import Information from "./components/Information";
import Navigation from "./components/Navigation";
import data from "./data.json";

export default function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

  return (
    <main className="h-screen font-kumbhSans  xl:mx-40 xl:overflow-hidden">
      <Navigation cart={cart} setCart={setCart} />
      <section className=" grid h-full grid-cols-1 gap-4 xl:grid-cols-2 xl:place-items-center xl:px-10">
        <Images product={data} />
        <Information
          product={data}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
      </section>
    </main>
  );
}
