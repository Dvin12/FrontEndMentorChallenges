interface Amount {
  amount: number;
  setAmount: (amount: number) => void;
}

export default function Amount({ amount, setAmount }: Amount) {
  function handleIncrease() {
    setAmount(amount + 1);
  }

  function handleDecrease() {
    if (amount <= 0) return;
    setAmount(amount - 1);
  }

  return (
    <section className=" flex items-center justify-between rounded-lg bg-lGrayBlue px-6 py-4 font-bold xl:w-1/4">
      <button onClick={handleDecrease} type="button">
        <img
          src="./images/icon-minus.svg"
          alt=""
          className=" duration-200 hover:opacity-40"
        />
      </button>
      <span>{amount}</span>
      <button onClick={handleIncrease} type="button">
        <img
          src="./images/icon-plus.svg"
          alt=""
          className=" duration-200 hover:opacity-40"
        />
      </button>
    </section>
  );
}
