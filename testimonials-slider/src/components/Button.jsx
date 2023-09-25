export default function Button({ handleClick }) {
  return (
    <div className="flex flex-row gap-8 justify-between bg-white shadow-lg px-5 py-3 rounded-3xl absolute bottom-[-20px] lg:left-32">
      <button onClick={handleClick}>
        <img src="./assets/images/icon-prev.svg" />
      </button>
      <button onClick={handleClick}>
        <img src="./assets/images/icon-next.svg" />
      </button>
    </div>
  );
}
