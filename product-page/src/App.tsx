import { useState } from "react";
import Images from "./components/Images";
import Information from "./components/Information";
import Navigation from "./components/Navigation";
import data from "./data.json";

export default function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

  return (
    <main className="font-kumbhSans overflow-hidden xl:mx-40 xl:h-screen">
      <Navigation cart={cart} />
      <section className=" grid grid-cols-1 xl:grid-cols-2 xl:place-items-center gap-4 xl:px-14 xl:h-full">
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
