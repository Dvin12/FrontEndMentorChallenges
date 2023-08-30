export default function Pledge({
  setActiveModal,
  setBacked,
  setTotalBackers,
  bamboo,
  setBamboo,
  black,
  setBlack,
  noReward,
  setNoReward,
  setBlackAmount,
  blackAmount,
  setBambooAmount,
  bambooAmount,
  setNoRewardAmount,
  noRewardAmount,
  blackLeft,
  bambooLeft,
  setBambooLeft,
  setBlackLeft,
  setSuccess,
}) {
  function handleCloseModal() {
    setActiveModal(false);
    setBamboo(false);
    setBlack(false);
    setNoReward(false);
  }

  function handleNoReward() {
    setNoRewardAmount("");
    setNoReward(true);
    setBamboo(false);
    setBlack(false);
  }

  function handleBamboo() {
    setBambooAmount("");
    setBamboo(true);
    setNoReward(false);
    setBlack(false);
  }

  function handleBlack() {
    setBlackAmount("");
    setBlack(true);
    setBamboo(false);
    setNoReward(false);
  }

  function handlePledgeNoReward() {
    setBacked((backed) => backed + noRewardAmount);
    setTotalBackers((backers) => backers + 1);
    setNoRewardAmount("");
    setSuccess(true);
  }

  function handlePledgeBamboo() {
    setBacked((backed) => backed + bambooAmount);
    setTotalBackers((backers) => backers + 1);
    setBambooLeft((bamboo) => bamboo - 1);
    setBambooAmount("");
    setSuccess(true);
  }

  function handlePledgeBlack() {
    setBacked((backed) => backed + blackAmount);
    setTotalBackers((backers) => backers + 1);
    setBlackLeft((black) => black - 1);
    setBlackAmount("");
    setSuccess(true);
  }

  return (
    <section className="w-full bg-[#fff] my-32 flex flex-col p-6 rounded-lg shadow-lg">
      <section className="flex items-center justify-between">
        <h6 className="text-lg font-semibold ">Back this project</h6>
        <button onClick={handleCloseModal}>
          <img src="./assets/images/icon-close-modal.svg" alt="" />
        </button>
      </section>
      <p className="pt-6 text-sm font-medium leading-relaxed text-cyan">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>

      <article
        className={`${
          noReward
            ? "border-[3px] cursor-default"
            : "border-[1px] cursor-pointer"
        } rounded-lg border-cyan  pt-12 my-4`}
        onClick={handleNoReward}
      >
        <section className="flex items-center gap-3 px-5">
          <button className="border-[1px] border-cyan w-7 h-7 rounded-full flex items-center justify-center bg-c ">
            {noReward && <div className="w-4 h-4 rounded-full bg-dCyan"></div>}
          </button>
          <h6 className="text-sm font-semibold">Pledge with no reward</h6>
        </section>
        <p className="px-5 py-6 mt-4 text-sm font-medium leading-relaxed text-cyan">
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
        {noReward && (
          <section className="border-t-[1px] w-full items-center flex flex-col justify-center py-8 border-cyan">
            <span className="font-medium text-dCyan">Enter your pledge</span>
            <div className="relative flex items-center justify-center gap-4 mt-4 ">
              <input
                type="text"
                className="border-[1px] w-2/5 rounded-full py-4 px-10 font-semibold border-cyan "
                min={25}
                value={noRewardAmount}
                onChange={(e) => setNoRewardAmount(Number(e.target.value))}
              ></input>

              <button
                className="px-8 py-4 font-medium text-[#fff] rounded-full bg-cyan"
                onClick={handlePledgeNoReward}
              >
                Continue
              </button>
              <span className="absolute font-semibold left-10 text-cyan">
                $
              </span>
            </div>
          </section>
        )}
      </article>

      <article
        className={`${
          bamboo ? "border-[3px] cursor-default" : "border-[1px] cursor-pointer"
        } rounded-lg border-cyan  pt-12 my-4`}
        onClick={handleBamboo}
      >
        <section className="flex items-center gap-3 px-5">
          <button className="border-[1px] border-cyan w-7 h-7 rounded-full flex items-center justify-center  ">
            {bamboo && <div className="w-4 h-4 rounded-full bg-dCyan"></div>}
          </button>
          <div className="flex flex-col justify-center gap-1">
            <h6 className="text-sm font-semibold">Bamboo Stand</h6>
            <p className="text-sm font-medium text-cyan">Pledge $25 or more</p>
          </div>
        </section>
        <p className="px-5 mt-4 text-sm font-medium leading-relaxed text-cyan">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list.
        </p>
        <section className="flex items-center gap-2 px-5 py-6">
          <span className="text-2xl font-semibold ">{bambooLeft}</span>
          <span className="font-medium text-cyan">left</span>
        </section>
        {bamboo && (
          <section className="border-t-[1px] w-full items-center flex flex-col justify-center py-8 border-cyan">
            <span className="font-medium text-dCyan">Enter your pledge</span>
            <div className="relative flex items-center justify-center gap-4 mt-4 ">
              <input
                type="text"
                className="border-[1px] w-2/5 rounded-full py-4 px-10 font-semibold border-cyan "
                min={25}
                value={bambooAmount}
                onChange={(e) => setBambooAmount(Number(e.target.value))}
              ></input>

              <button
                className="px-8 py-4 font-medium text-[#fff] rounded-full bg-cyan "
                onClick={handlePledgeBamboo}
              >
                Continue
              </button>
              <span className="absolute font-semibold left-10 text-cyan">
                $
              </span>
            </div>
          </section>
        )}
      </article>

      <article
        className={`${
          black ? "border-[3px] cursor-default" : "border-[1px] cursor-pointer"
        } rounded-lg border-cyan  pt-12 my-4`}
        onClick={handleBlack}
      >
        <section className="flex items-center gap-3 px-5">
          <button className="border-[1px] border-cyan w-7 h-7 rounded-full flex items-center justify-center bg-c ">
            {black && <div className="w-4 h-4 rounded-full bg-dCyan"></div>}
          </button>
          <div className="flex flex-col justify-center gap-1 ">
            <h6 className="text-sm font-semibold">Black Edition Stand</h6>
            <p className="text-sm font-medium text-cyan">Pledge $75 or more</p>
          </div>
        </section>
        <p className="px-5 mt-4 text-sm font-medium leading-relaxed text-cyan">
          You get a Black Special Editon computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included.
        </p>
        <section className="flex items-center gap-2 px-5 py-6">
          <span className="text-2xl font-semibold ">{blackLeft}</span>
          <span className="font-medium text-cyan">left</span>
        </section>

        {black && (
          <section className="border-t-[1px] w-full items-center flex flex-col justify-center py-8 border-cyan">
            <span className="font-medium text-dCyan">Enter your pledge</span>
            <div className="relative flex items-center justify-center gap-4 mt-4 ">
              <input
                type="text"
                className="border-[1px] w-2/5 rounded-full py-4 px-10 font-semibold border-cyan "
                min={75}
                value={blackAmount}
                onChange={(e) => setBlackAmount(Number(e.target.value))}
              ></input>

              <button
                className="px-8 py-4 font-medium text-[#fff] rounded-full bg-cyan"
                onClick={handlePledgeBlack}
              >
                Continue
              </button>
              <span className="absolute font-semibold left-10 text-cyan">
                $
              </span>
            </div>
          </section>
        )}
      </article>

      <article className="border-[1px] rounded-lg border-cyan px-5 pt-12 my-4 opacity-50 cursor-not-allowed ">
        <section className="flex items-center gap-3">
          <button className="border-[1px] border-cyan w-7 h-7 rounded-full flex items-center justify-center bg-c "></button>
          <div className="flex flex-col justify-center gap-1">
            <h6 className="text-sm font-semibold">Mahogany Special Edition</h6>
            <p className="text-sm font-medium text-cyan">Pledge $200 or more</p>
          </div>
        </section>
        <p className="mt-4 text-sm font-medium leading-relaxed text-cyan">
          You get two Special Editon Mahogany stands, a Backer T-Shirt and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included
        </p>
        <section className="flex items-center gap-2 py-6">
          <span className="text-2xl font-semibold ">0</span>
          <span className="font-medium text-cyan">left</span>
        </section>
      </article>
    </section>
  );
}
