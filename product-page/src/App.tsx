import { useState } from "react";
import Images from "./components/Images";
import Information from "./components/Information";
import Navigation from "./components/Navigation";
import data from "./data.json";

export default function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  console.log(cart);

  return (
    <main className="font-kumbhSans overflow-hidden">
      <Navigation cart={cart} />
      <section className=" grid grid-cols-1">
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
