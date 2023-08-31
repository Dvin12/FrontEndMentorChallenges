export default function Success({
  setSuccess,
  setActiveModal,
  setBamboo,
  setBlack,
  setNoReward,
}) {
  function handleClick() {
    setBamboo(false),
      setBlack(false),
      setNoReward(false),
      setSuccess(false),
      setActiveModal(false);
  }
  return (
    <section className="w-full bg-[#fff] my-32 flex flex-col items-center justify-center py-12 px-4 xl:px-20 xl:py-24 rounded-lg shadow-lg">
      <img src="./assets/images/icon-check.svg" alt="" />
      <h3 className="my-5 text-lg font-semibold xl:text-2xl">
        Thanks for your support!
      </h3>
      <p className="text-sm font-medium leading-relaxed text-center text-cyan xl:text-lg">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        className="mt-10 bg-cyan text-[#fff] px-8 py-3 xl:px-14 xl:py-4 xl:text-lg rounded-full font-medium hover:bg-dCyan duration-200"
        onClick={handleClick}
      >
        Got it!
      </button>
    </section>
  );
}
