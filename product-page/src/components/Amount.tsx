export default function Amount() {
  return (
    <div className=" bg-lGrayBlue flex items-center justify-between px-6 py-4 font-bold rounded-lg">
      <button>
        <img src="./images/icon-minus.svg" alt="" />
      </button>
      <span>0</span>
      <button>
        <img src="./images/icon-plus.svg" alt="" />
      </button>
    </div>
  );
}
