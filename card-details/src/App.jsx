import { useState, useEffect } from "react";
import Background from "./components/Background";
import CardBack from "./components/CardBack";
import CardForm from "./components/CardForm";
import CardFront from "./components/CardFront";
import Confirmed from "./components/Confirmed";

export default function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [submit, setSubmit] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 767;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= breakpoint;

  return (
    <main className="font-spaceGrotesk  md:grid md:grid-cols-3 flex flex-col  relative w-full h-full   md:w-screen md:h-screen">
      <Background
        image={isMobile ? "bg-main-mobile.png" : "bg-main-desktop.png"}
      />
      {submit === true ? (
        <Confirmed
          setSubmit={setSubmit}
          setCardName={setCardName}
          setCardNumber={setCardNumber}
          setCardMonth={setCardMonth}
          setCardYear={setCardYear}
          setCardCvc={setCardCvc}
        />
      ) : (
        <CardForm
          setSubmit={setSubmit}
          cardName={cardName}
          setCardName={setCardName}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardMonth={cardMonth}
          setCardMonth={setCardMonth}
          cardYear={cardYear}
          setCardYear={setCardYear}
          cardCvc={cardCvc}
          setCardCvc={setCardCvc}
        />
      )}
      <div className="md:fixed absolute md:w-[40%] xl:top-[20%]  md:top-[25%]  w-[100%] ">
        <div className="relative w-full h-full">
          <CardFront
            cardName={cardName}
            cardNumber={cardNumber}
            cardMonth={cardMonth}
            cardYear={cardYear}
          />
          <CardBack cardCvc={cardCvc} />
        </div>
      </div>
    </main>
  );
}
