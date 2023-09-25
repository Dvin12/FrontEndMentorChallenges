import { useState } from "react";

export default function CardForm({
  setSubmit,
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
  cardMonth,
  setCardMonth,
  cardYear,
  setCardYear,
  cardCvc,
  setCardCvc,
}) {
  const [nameRequired, setNameRequired] = useState();
  const [cardNumberRequired, setCardNumberRequired] = useState(false);
  const [monthRequired, setMonthRequired] = useState(false);
  const [yearRequired, setYearRequired] = useState(false);
  const [cvcRequired, setCvcRequired] = useState(false);
  const [nameError, setNameError] = useState("");
  const [cardLength, setCardLength] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // If there is empty input fields //
    setNameRequired(!cardName);
    setCardNumberRequired(!cardNumber);
    setMonthRequired(!cardMonth);
    setYearRequired(!cardYear);
    setCvcRequired(!cardCvc);

    // if the input is not valid //

    if (!cardName.trim().includes(" ")) {
      setNameError("Please enter both name and surname.");
      return;
    }
    if (cardNumber.length < 16) {
      setCardLength("Requires a valid card number");
      return;
    }
    if (cardName && cardNumber && cardMonth && cardYear) {
      // If input fields are filled correctly //
      setSubmit(true);
    }
  }

  function handleNameChange(e) {
    setCardName(e.target.value.replace(/[^A-Za-z\s]/g, ""));
    setNameRequired(false);
    setNameError("");
  }

  function handleCardChange(e) {
    setCardNumber(e.target.value.slice(0, 16));
    setCardNumberRequired(false);
  }

  function handleMonthChange(e) {
    setCardMonth(Number(e.target.value.slice(0, 2)));
    setMonthRequired(false);
  }

  function handleYearChange(e) {
    setCardYear(Number(e.target.value.slice(0, 2)));
    setYearRequired(false);
  }

  function handleCvcChange(e) {
    setCardCvc(Number(e.target.value.slice(0, 3)));
    setCvcRequired(false);
  }

  return (
    <section className=" md:col-span-2 grid place-content-center   w-full h-full  py-28  ">
      <form onSubmit={handleSubmit} className="px-6 md:px-0">
        <section className="flex flex-col gap-2 relative ">
          <label className="text-sm font-bold tracking-widest">
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            className={`border-2 p-3 rounded-lg focus:outline-none focus:border-l-[hsl(249,99%,64%)] focus:border-r-[hsl(278,94%,30%)] focus:border-t-[hsl(249,99%,64%)] focus:border-b-[hsl(278,94%,30%)] duration-300 ${
              nameRequired && "border-red-400 focus:border-red-400"
            }`}
            placeholder="e.g. Rob Banks"
            value={cardName}
            onChange={handleNameChange}
          />

          {nameError && (
            <p className="text-red-500 absolute top-20">{nameError}</p>
          )}
        </section>

        <section className="flex flex-col gap-2 mt-8 relative">
          <label className="text-sm font-bold tracking-widest">
            CARD NUMBER
          </label>
          <input
            type="number"
            className={`border-2 p-3 rounded-lg focus:outline-none focus:border-l-[hsl(249,99%,64%)] focus:border-r-[hsl(278,94%,30%)] focus:border-t-[hsl(249,99%,64%)] focus:border-b-[hsl(278,94%,30%)] duration-300 ${
              cardNumberRequired && "border-red-400 focus:border-red-400"
            }`}
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            minLength={16}
            maxLength={16}
            onChange={handleCardChange}
          />
          {cardNumberRequired && (
            <p className="text-red-500 absolute top-20">Can't be blank</p>
          )}

          {cardLength && (
            <p className="text-red-500 absolute top-20">{cardLength}</p>
          )}
        </section>
        <div className="flex flex-row gap-8 items-center justify-center mt-8 relative">
          <section className="flex flex-col gap-2">
            <label className="text-sm font-bold tracking-widest">
              EXP. DATE (MM/YY)
            </label>
            <div className="flex flex-row gap-2">
              <input
                type="number"
                className={`border-2 p-3 rounded-lg focus:outline-none focus:border-l-[hsl(249,99%,64%)] focus:border-r-[hsl(278,94%,30%)] focus:border-t-[hsl(249,99%,64%)] focus:border-b-[hsl(278,94%,30%)] duration-300 ${
                  monthRequired && "border-red-400"
                }`}
                placeholder="MM"
                min={0}
                max={12}
                value={cardMonth}
                onChange={handleMonthChange}
              />
              <input
                type="number"
                className={`border-2 p-3 rounded-lg focus:outline-none focus:border-l-[hsl(249,99%,64%)] focus:border-r-[hsl(278,94%,30%)] focus:border-t-[hsl(249,99%,64%)] focus:border-b-[hsl(278,94%,30%)] duration-300  ${
                  yearRequired && "border-red-400"
                }`}
                placeholder="YY"
                min={0}
                max={99}
                value={cardYear}
                onChange={handleYearChange}
              />
            </div>
            {(monthRequired || yearRequired) && (
              <p className="text-red-500 absolute top-20">Can't be blank</p>
            )}
          </section>

          <section className="flex flex-col gap-2 relative">
            <label className="text-sm font-bold tracking-widest">CVC</label>
            <input
              type="number"
              className={`border-2 p-3 rounded-lg focus:outline-none focus:border-l-[hsl(249,99%,64%)] focus:border-r-[hsl(278,94%,30%)] focus:border-t-[hsl(249,99%,64%)] focus:border-b-[hsl(278,94%,30%)] duration-300 w-[200px]  ${
                cvcRequired && "border-red-400"
              }`}
              placeholder="e.g. 123"
              min={1}
              max={999}
              maxLength={999}
              value={cardCvc}
              onChange={handleCvcChange}
            />
            {cvcRequired && (
              <p className="text-red-500 absolute top-20">Can't be blank</p>
            )}
          </section>
        </div>
        <div className="flex flex-col w-full justify-center bg-[hsl(278,68%,11%)] my-12 rounded-lg">
          <button className="p-4 text-lg text-white ">Confirm</button>
        </div>
      </form>
    </section>
  );
}
