interface Amount {
  amount: number;
  setAmount: (amount: number) => void;
}

export default function Amount({ amount, setAmount }: Amount) {
  function handleIncrease() {
    setAmount((amount) => amount + 1);
  }

  function handleDecrease() {
    if (amount <= 0) return;
    setAmount((amount) => amount - 1);
  }

  return (
    <div className=" bg-lGrayBlue flex items-center justify-between px-6 py-4 font-bold rounded-lg">
      <button onClick={handleDecrease} type="button">
        <img src="./images/icon-minus.svg" alt="" />
      </button>
      <span>{amount}</span>
      <button onClick={handleIncrease} type="button">
        <img src="./images/icon-plus.svg" alt="" />
      </button>
    </div>
  );
}
